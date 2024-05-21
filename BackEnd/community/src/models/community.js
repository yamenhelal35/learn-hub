const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: false }
})

const CommunitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    about: { type: String, required: false, unique: false },
    privacy: {
      type: String,
      required: true,
      enum: ['public', 'private'], // Only allow "public" and "private"
      unique: false
    },
    ownerID: { type: String, required: false, unique: false },
    members: [MemberSchema],
    files: { type: Array, required: false }
  },
  { timestamps: true }
)

const Community = mongoose.model('Community', CommunitySchema)

/* mongoose.connection.on('connected', async () => {
  try {
    await mongoose.connection.db.dropCollection('communities') // Replace 'users' with the actual name of your collection
    console.log('communities collection dropped.')
  } catch (error) {
    if (error.code === 26) {
      console.log('communities collection does not exist.')
    } else {
      console.error('Error dropping User collection:', error)
    }
  }
}) */

module.exports = Community
