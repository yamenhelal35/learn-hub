require('dotenv').config() // Load environment variables from .env file
const admin = require('firebase-admin')
const firebase = require('firebase/compat/app')
require('firebase/compat/auth')

// Firebase configuration
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

// Initialize Firebase Admin SDK using the service account key file
const serviceAccount = require('../../learnhub-df10a-firebase-adminsdk-5yv0j-e4db18d8f0.json') // Adjust the path as necessary
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = { firebaseApp, admin }
