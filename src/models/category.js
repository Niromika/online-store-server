const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
      type: String,
      required: true
  },
  url: {
    type: String
  }
}, {
  collection: 'categories',
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  }
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;