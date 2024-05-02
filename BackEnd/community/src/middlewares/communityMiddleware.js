const dotenv = require('dotenv')
const { admin } = require('../Config/firebaseeconfig')

dotenv.config()

/* async function readCookie (req, res, next) {
  try {
    const tokenCookie = req.cookies.token
    const token = tokenCookie || null

    req.token = token

    next()
  } catch (error) {
    console.error(`Error while processing token: ${error}`)
    res.status(500).json({ message: 'Internal Server Error' })
    next(error)
  }
} */

async function userFromToken (req, res, next) {
  const tokenHeader = req.headers.authorization
  console.log(`req.headers : ${req.headers}`)

  if (!tokenHeader) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' })
  }

  const token = tokenHeader.split('Bearer ')[1]
  console.log(`token : ${token}`)

  const decodedToken = await admin.auth().verifyIdToken(token)
  console.log('Firebase ID token verified successfully:', decodedToken)
  const userId = decodedToken.uid
  const mongouserId = decodedToken.mongoUserID
  const username = decodedToken.mongoUserName

  req.userId = userId
  req.mongouserId = mongouserId
  req.username = username

  next()
}

module.exports = { userFromToken }
