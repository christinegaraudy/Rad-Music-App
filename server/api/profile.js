const { Router } = require('express');

const Profile = Router();

const { addBio, addStatus, updateBio, updateStatus } = require('../db/index.js');


// grab bio and status from database

// const getBio = () => {
//   dbConnection.query('SELECT bio FROM user;', (error, results) => {
//     if (error) {
//       return console.error('Could not get bio', error);
//     }
//     return console.log('Grabbed bio', results.affectedRows);
//   });
// };

// Profile.get('/api/bio', (req, res) => {
//   getBio();
// });

Profile.post('/bio', (req, res) => {
  // addBio({ bio: req.body.data });
  updateBio({ bio: req.body.data });
});

Profile.post('/status', (req, res) => {
  // addStatus({ status: req.body.data });
  updateStatus({ status: req.body.data });
});

module.exports = {
  Profile,
};
