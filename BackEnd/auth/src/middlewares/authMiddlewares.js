const { admin } = require('../Config/firebaseeconfig')

async function isAuthenticated (req, res, next) {
  const authHeader = req.headers.authorization
  console.log(`authHeader: ${authHeader}`)

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header is missing' })
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header format is invalid' })
  }

  const token = authHeader.split('Bearer ')[1]
  console.log(`token: ${token}`)

  if (!token) {
    return res.status(401).json({ error: 'Token is missing' })
  }

  try {
    console.log('Verifying Firebase ID token...')
    const decodedToken = await admin.auth().verifyIdToken(token)
    console.log('Firebase ID token verified successfully:', decodedToken)
    const userId = decodedToken.uid
    const mongouserId = decodedToken.mongoUserId
    const username = decodedToken.username

    req.userId = userId
    req.mongouserId = mongouserId
    req.username = username

    next()
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error)
    return res.status(403).json({ error: 'Failed to verify Firebase ID token' })
  }
}

module.exports = { isAuthenticated }
