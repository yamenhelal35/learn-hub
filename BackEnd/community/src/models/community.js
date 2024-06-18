const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  profilepic: { type: String, required: false, unique: false, default: '' }

})

const FileSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true }
  }
)

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    required: true
  },
  category: {
    type: String,
    enum: ['Important', 'Class Material', 'Exam', 'Discussion'],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema)

const CommunitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    about: { type: String, required: false, unique: false },
    privacy: {
      type: String,
      required: true,
      enum: ['public', 'private'],
      unique: false
    },
    ownerID: { type: String, required: false, unique: false },
    members: [MemberSchema],
    files: [FileSchema],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
  },
  { timestamps: true }
)

const Community = mongoose.model('Community', CommunitySchema)
const Post = mongoose.model('Post', postSchema)
const Member = mongoose.model('Member', MemberSchema)

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

module.exports = { Community, Post, Member }
