const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { DateTime } = require('luxon')

const AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  family_name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  date_of_birth: {type: Date},
  date_of_death: {type: Date},
})

AuthorSchema.virtual('name').get(function(){
  // To avoid errors in cases where an author does not have either a family name or first name
  // we want to make sure we handle the exception by returning an empty string for that case
  let fullname = ''
  if (this.first_name && this.family_name)
    fullname = this.family_name + ', ' + this.first_name

  return fullname;
})

AuthorSchema.virtual('lifespan').get(function(){
  let lifetime_string = '';
  if (this.date_of_birth)
    // lifetime_string = this.date_of_birth.getYear().toString();
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);

  lifetime_string += ' - ';
  if (this.date_of_death)
    // lifetime_string += this.date_of_death.getYear()
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);

  return lifetime_string;
})

// Virtual for author's URL
AuthorSchema.virtual('url').get(function(){
  return '/catalog/author/' + this._id;
})


AuthorSchema.virtual('date_of_birth_formatted').get(function(){
  return DateTime.fromJSDate(this.date_of_birth).toUTC().toLocaleString(DateTime.DATE_MED);
})

AuthorSchema.virtual('date_of_death_formatted').get(function(){
  return DateTime.fromJSDate(this.date_of_death).toUTC().toLocaleString(DateTime.DATE_MED);
})


// Virtual for form compatible date of birth value
AuthorSchema.virtual('date_of_birth_form_formatted').get(function(){
  return DateTime.fromJSDate(this.date_of_birth).toUTC().toFormat('yyyy-MM-dd')
})

// Virtual for form compatible date of death value
AuthorSchema.virtual('date_of_death_form_formatted').get(function(){
  return DateTime.fromJSDate(this.date_of_death).toUTC().toFormat('yyyy-MM-dd')
})


//Export model
module.exports = mongoose.model('Author', AuthorSchema);
