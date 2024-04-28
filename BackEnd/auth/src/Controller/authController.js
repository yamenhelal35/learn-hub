const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth')
const { firebaseApp } = require('../Config/firebaseeconfig')
const { admin } = require('../Config/firebaseeconfig')
const AuthService = require('../Service/service')
const tenYearsInSeconds = 10 * 365 * 24 * 60 * 60

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
      console.log('mongoUser:', mongoUser)
      const mongoUserID = mongoUser._id
      const mongoUserName = mongoUser.username
      console.log('mongoUserId :', mongoUserID)
      console.log('mongoUserName :', mongoUserName)
      await admin.auth().setCustomUserClaims(firebaseUid, { mongoUserID, mongoUserName })

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
}

module.exports = AuthController
