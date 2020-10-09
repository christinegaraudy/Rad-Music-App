const { Router } = require('express');

const Profile = Router();

const { addBio, addStatus, updateStatus } = require('../db/index.js');

const { db, User } = require('../db/index.js');


// grab bio and status from database

const getBio = () => {
  console.log('getBio')
  User.findAll();
    // .then(user => {
    //   console.log(user);
    // })
  // db.query('SELECT * FROM user;', (error, results) => {
  //   console.log('THIS IS RWSSS', results);
  //   if (error) {
  //     return console.error('Could not get bio', error);
  //   }
  //   return console.log('Grabbed bio', results.affectedRows);
  // });
};

Profile.get('/bio', (req, res) => {
  console.log('GET');
  return getBio(req.body.data);
});

Profile.post('/bio', (req, res) => {
  console.log('POST');
  // addBio({ bio: req.body.data });
  // updateBio({ bio: req.body.data });
});

Profile.post('/status', (req, res) => {
  // addStatus({ status: req.body.data });
  updateStatus({ status: req.body.data });
});

module.exports = {
  Profile,
};
