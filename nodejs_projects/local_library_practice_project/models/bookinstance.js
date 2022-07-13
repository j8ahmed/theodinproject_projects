const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon')

const BookInstanceSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }, //reference to the associated book
  imprint: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance'
  },
  due_back: {
    type: Date,
    default: Date.now
  }
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual('url').get(function(){
  return '/catalog/bookinstance/' + this._id;
});

// Virtual for visually appealing format date
BookInstanceSchema.virtual('due_back_formatted').get(function(){
  return DateTime.fromJSDate(this.due_back).toUTC().toLocaleString(DateTime.DATE_MED);
})

// Virtual for form compatible date value
BookInstanceSchema.virtual('due_back_form_formatted').get(function(){
  return DateTime.fromJSDate(this.due_back).toUTC().toFormat('yyyy-MM-dd')
})

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);

