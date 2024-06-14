const CommunityRepository = require('../Repository/communityRepository')

const joi = require('joi')

class CommunityService {
  constructor () {
    this.communityRepository = new CommunityRepository()
  }

  validateCommunityData (data) {
    const schema = joi.object({
      name: joi.string().required().label('name'),
      ownerID: joi.string().label('ownerID'),
      members: joi.array().label('members'),
      about: joi.string().label('about'),
      privacy: joi.string().required().label('privacy')
    })
    return schema.validate(data)
  }

  async newCommunity (communityData, username) {
    try {
      const { error } = this.validateCommunityData(communityData)
      if (error) {
        throw new Error(error.details[0].message)
      }

      const newCommunity = await this.communityRepository.createCommunity({
        ...communityData,
        members: communityData.members || []
      })

      return { message: 'Community created successfully', community: newCommunity }
    } catch (error) {
      throw new Error(`Community creation failed: ${error.message}`)
    }
  }

  async getCommunityById (_id) {
    try {
      const community = await this.communityRepository.findCommunityById(_id)

      console.log(`communityID: ${_id}`)

      return community
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error.message}`)
    }
  }

  async joinCommunity (communityId, userId, username, userEmail, userProfilePic) {
    try {
      const community = await this.communityRepository.joinCommunity(communityId, userId, username, userEmail, userProfilePic)
      return community
    } catch (error) {
      throw new Error(`Failed to join community: ${error.message}`)
    }
  }

  async getAllCommunitiesforuser (userId) {
    try {
      const communities = await this.communityRepository.allCommunitiesforuser(userId)
      console.log(`received communities are : ${communities}`)

      return communities
    } catch (error) {
      throw new Error(`Failed to fetch communities: ${error.message}`)
    }
  }

  async allMemberForCommunity (communityId) {
    try {
      const communityMembers = await this.communityRepository.allMemberForCommunity(communityId)
      console.log(`received communities members are : ${communityMembers}`)

      return communityMembers
    } catch (error) {
      throw new Error(`Failed to fetch communities members: ${error.message}`)
    }
  }

  async getTenCommunities (userId) {
    try {
      const communities = await this.communityRepository.getTenCommunities()
      const retrievedCommunities = []
      const seenCommunityIds = new Set()

      let additionalCommunitiesNeeded = 10

      for (const community of communities) {
        const communityMembers = community.members
        if (!communityMembers.includes(userId)) {
          retrievedCommunities.push(community)
          seenCommunityIds.add(community._id)
          additionalCommunitiesNeeded--
        }
      }

      // Fetch additional communities if needed
      while (additionalCommunitiesNeeded > 0) {
        const additionalCommunities = await this.communityRepository.getAdditionalCommunities(seenCommunityIds)

        if (additionalCommunities.length === 0) {
          // No more additional communities to fetch
          break
        }

        for (const community of additionalCommunities) {
          if (!community.members.includes(userId) && !seenCommunityIds.has(community._id)) {
            retrievedCommunities.push(community)
            seenCommunityIds.add(community._id)
            additionalCommunitiesNeeded--

            if (additionalCommunitiesNeeded === 0) {
              break
            }
          }
        }
      }

      return { communities: retrievedCommunities }
    } catch (error) {
      throw new Error(`Failed to fetch communities: ${error.message}`)
    }
  }

  async updateIsOwner (_id, userId) {
    try {
      const community = await this.communityRepository.updateUserRole(_id, userId)
      const communityDataIDPromise = this.getCommunityById(_id)

      // Wait for the Promise to resolve
      const communityOwnerID = await communityDataIDPromise
      let isOwner = false

      console.log(`communityOwnerID.ownerID: ${communityOwnerID.ownerID}`)
      console.log(`userId: ${userId}`)

      if (communityOwnerID.ownerID === userId) {
        isOwner = true
      }

      console.log(`isOwner value: ${isOwner}`)

      return [community, isOwner]
    } catch (error) {
      throw new Error(`Failed to update community: ${error.message}`)
    }
  }

  async uploadFile (communityId, userId, file) {
    try {
      const result = await this.communityRepository.uploadFile(communityId, userId, file)

      return result
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`)
    }
  }

  async getAllPostsForCommunity (communityId) {
    try {
      const posts = await this.communityRepository.getAllPostsForCommunity(communityId)
      return posts
    } catch (error) {
      throw new Error(`Failed to fetch posts for community: ${error.message}`)
    }
  }

  async createPost (title, content, communityId) {
    try {
      const result = await this.communityRepository.createPost(title, content, communityId)
      return result
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`)
    }
  }

/*   getPostById (id) {
    return this.communityRepository.getPostById(id)
  }

  updatePost (id, title, content) {
    return this.communityRepository.updatePost(id, title, content)
  }

  deletePost (id) {
    return this.communityRepository.deletePost(id)
  } */
}

module.exports = CommunityService
