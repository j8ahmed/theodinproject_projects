const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MessageSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})


module.exports = mongoose.model('Message', MessageSchema)
