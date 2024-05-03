// Firebase config file
const admin = require('firebase-admin')
const firebase = require('firebase/compat/app')

require('firebase/compat/auth')

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig)
const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('ascii'))
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = { firebaseApp, admin }
