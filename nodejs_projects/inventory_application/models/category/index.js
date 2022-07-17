const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
  },
})

modelSchema.virtual('url').get(function(){
  return `/categories/${this._id}`
})


//Export model
module.exports = mongoose.model('Category', modelSchema);

