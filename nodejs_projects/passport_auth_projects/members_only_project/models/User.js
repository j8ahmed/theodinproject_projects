const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    maxLength: 100,
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 100,
  },
  username: {
    type: String,
    required: true,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    maxLength: 100,
  },
  isMember: {
    type: Boolean,
    required: false,
    default: false
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false
  },
})

UserSchema.virtual('name').get(function(){
  return `${this.firstname} ${this.lastname}`
})

module.exports = mongoose.model('User', UserSchema)
