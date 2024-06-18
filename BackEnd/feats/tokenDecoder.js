const dotenv = require('dotenv');
const { admin } = require('../community/src/Config/firebaseeconfig');
const cookieParser = require('cookie-parser');

dotenv.config();

async function userFromToken(req, res, next) {
  const tokenHeader = req.cookies && req.cookies.token;
  console.log(`req.cookies: ${JSON.stringify(req.cookies)}`);

  if (!tokenHeader) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(tokenHeader);
    console.log('Firebase ID token verified successfully:', decodedToken);
    const userId = decodedToken.uid;
    const mongouserId = decodedToken.mongoUserID;
    const username = decodedToken.mongoUserName;

    req.userId = userId;
    req.mongouserId = mongouserId;
    req.username = username;

    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
}

module.exports = { userFromToken };
