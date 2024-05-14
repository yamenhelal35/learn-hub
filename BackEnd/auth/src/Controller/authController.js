const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth')
const { firebaseApp } = require('../Config/firebaseeconfig')
const { admin } = require('../Config/firebaseeconfig')
const AuthService = require('../Service/service')
const tenYearsInSeconds = 10 * 365 * 24 * 60 * 60
const cloudinary = require('../Config/cloudinary')

/* const AuthMiddlewares = require('../middlewares/authMiddlewares') */

class AuthController {
  constructor () {
    this.authService = new AuthService()
  }

  /*   async login (req, res) {
    const { email, password } = req.body

    const result = await this.authService.loginUser(email, password)

    if (result.success) {
      res.json({ message: result.message, token: result.token })
    } else {
      res.status(400).json({ message: result.message })
    }

  } */
  /*
  async register (req, res) {
    const user = req.body

    try {
      const existingUserEmail = await this.authService.existingUserEmail(user.email)
      const existingUserName = await this.authService.existingUserName(user.username)

      if (existingUserEmail) {
        throw new Error('Email already taken')
      }

      if (existingUserName) {
        throw new Error('Username already taken')
      }

      const result = await this.authService.registerUser(user)
      res.json(result)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  } */

  async register (req, res) {
    const user = req.body

    try {
      const existingUserEmail = await this.authService.existingUserEmail(user.email)
      const existingUserName = await this.authService.existingUserName(user.username)

      if (existingUserEmail) {
        throw new Error('Email already taken')
      }

      if (existingUserName) {
        throw new Error('Username already taken')
      }

      const auth = getAuth(firebaseApp)

      const { email, password } = user
      await createUserWithEmailAndPassword(auth, email, password)

      const result = await this.authService.registerUser(user)
      console.log(`user: ${result}`)
      res.json(result)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async login (req, res) {
    const auth = getAuth()
    const { email, password } = req.body
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const firebaseUid = userCredential.user.uid

      const mongoUser = await this.authService.getMongoUserFromEmail(email)
      const mongoUserID = mongoUser._id
      const mongoUserName = mongoUser.username
      await admin.auth().setCustomUserClaims(firebaseUid, { mongoUserID, mongoUserName })
        .then(() => {
          console.log('Custom claims set successfully')
        })
        .catch(error => {
          console.error('Error setting custom claims:', error)
        })

      const token = await userCredential.user.getIdToken(true)

      console.log('token :', token)
      res.cookie('token', token, { httpOnly: true })
      res.json({ message: 'Authentication successful', token })
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      res.status(400).json({ errorCode, errorMessage })
    }
  }

  async getProfile (req, res) {
    try {
      const userId = req.mongouserId

      const user = await this.authService.getUserById(userId)
      res.json(user)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async getAll (req, res) {
    try {
      const users = await this.authService.getAllUsers()
      res.json(users)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async setcookie (req, res) {
    try {
      const userToken = req.headers.authorization
      res.setHeader('Set-Cookie', `token=${userToken}; Path=/; HttpOnly; Max-Age=${tenYearsInSeconds}`)
      res.send('got a cookie')
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async uploadphoto (req, res) {
    const userId = req.mongouserId
    const user = await this.authService.getUserById(userId)

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded.'
      })
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found!'
      })
    }

    try {
      const result = await cloudinary.uploader.upload(req.file.path)
      const updateResult = await this.authService.updateOne(
        { _id: userId }, // Correct filter to update the correct user
        { $set: { profilepic: result.secure_url } }
      )

      if (updateResult.nModified === 0) {
        return res.status(400).json({
          success: false,
          message: 'Error while updating profile picture.'
        })
      }

      res.status(200).json({
        success: true,
        message: 'Uploaded successfully!',
        data: result
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({
        success: false,
        message: 'Error during file upload',
        error: err.message
      })
    }
  }

  async logout (req, res) {
    try {
      res.clearCookie('token', { httpOnly: true })
      res.json({ message: 'Logged Out' })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
}

module.exports = AuthController
