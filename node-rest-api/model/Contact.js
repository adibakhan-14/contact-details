const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
  name: {
    type: String
  },
  company: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
}, {
  collection: 'contacts'
})

module.exports = mongoose.model('Contact', Contact)
