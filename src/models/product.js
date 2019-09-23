const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  brand: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  categoryId: {
      type: ObjectId,
      required: true
  },
  url: {
    type: String
  }
}, {
    toJSON: {
        transform: (doc, ret) => {
          ret.id = ret._id;
          delete ret._id;
          return ret;
        }
      }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;