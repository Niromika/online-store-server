const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40
  },
  last_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40
  },
  email: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 40
  },
  password: {
      type: String,
      required: true,
      minlength: 8
  },
  bday: {
      type: Date,
      required: true,
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;