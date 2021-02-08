const express = require('express');
const app = express();

const contactRoute = express.Router();
let Contact = require('../model/Contact');

// Add Book
contactRoute.post('/add-contact',(req, res, next) => {
    Contact.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



// Get all Book
contactRoute.route('/contact-detail').get((req, res) => {
  Contact.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
contactRoute.route('/contact-detail/:id').get((req, res) => {
  Contact.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Book
// bookRoute.route('/update-book/:id').put((req, res, next) => {
//     Book.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Book updated successfully!')
//     }
//   })
// })

// Delete Book
// bookRoute.route('/delete-book/:id').delete((req, res, next) => {
//     Book.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = contactRoute;
