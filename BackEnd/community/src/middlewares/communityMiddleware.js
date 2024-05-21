const dotenv = require('dotenv')
const { admin } = require('../Config/firebaseeconfig')
const Community = require('../models/community') // Assuming you have a Community model

dotenv.config()

async function userFromToken (req, res, next) {
  const tokenHeader = req.headers.authorization
  console.log(`req.headers : ${req.headers}`)

  if (!tokenHeader) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' })
  }

  try {
    const token = tokenHeader.split('Bearer ')[1]
    console.log(`token : ${token}`)

    const decodedToken = await admin.auth().verifyIdToken(token)
    console.log('Firebase ID token verified successfully:', decodedToken)

    req.userId = decodedToken.uid
    req.mongouserId = decodedToken.mongoUserID
    req.username = decodedToken.mongoUserName

    next()
  } catch (error) {
    console.error(`Error while verifying token: ${error}`)
    res.status(401).json({ error: 'Unauthorized: Invalid token' })
  }
}

async function checkIsOwner (req, res, next) {
  try {
    const { communityId } = req.params
    const userId = req.userId

    const community = await Community.findById(communityId)
    if (!community) {
      return res.status(404).json({ error: 'Community not found' })
    }

    if (community.ownerID === userId) {
      req.userRole = 'Admin'
    } else {
      req.userRole = 'Member'
    }

    next()
  } catch (error) {
    console.error(`Error while checking ownership: ${error}`)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { userFromToken, checkIsOwner }
