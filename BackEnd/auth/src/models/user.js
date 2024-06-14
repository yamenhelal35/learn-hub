const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: false, unique: false },
    lastname: { type: String, required: false, unique: false },
    profilepic: { type: String, required: false, unique: false, default: '' },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    joinedCommunities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }]
  }, { timestamps: true })

const User = mongoose.model('User', UserSchema)

/* mongoose.connection.on('connected', async () => {
  try {
    await mongoose.connection.db.dropCollection('users') // Replace 'users' with the actual name of your collection
    console.log('User collection dropped.')
  } catch (error) {
    if (error.code === 26) {
      console.log('User collection does not exist.')
    } else {
      console.error('Error dropping User collection:', error)
    }
  }
}) */
module.exports = { User }
