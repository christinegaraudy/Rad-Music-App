const Sequelize = require('sequelize');
const { SEQUEL_PASS } = require('../config');

const db = new Sequelize('radma', 'root', '', {
  host: 'localhost',
  // password: SEQUEL_PASS,
  dialect: 'mysql',
});

const Show = db.define('shows', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  venue: Sequelize.STRING,
  date: Sequelize.DATE,
  address: Sequelize.STRING,
  details: Sequelize.STRING,
});

const Genre = db.define('genres', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  genreName: Sequelize.STRING,
});

const Band = db.define('bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bandName: Sequelize.STRING,
  genreId: Sequelize.INTEGER,
});

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: Sequelize.STRING,
  pictures: Sequelize.DATE,
  profilePic: Sequelize.STRING,
  googleId: Sequelize.STRING,
  genreId: Sequelize.INTEGER,
  // status: Sequelize.STRING,
  bio: Sequelize.STRING,
});

const ShowsBands = db.define('shows_bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bandId: Sequelize.INTEGER,
  showId: Sequelize.INTEGER,
});

// adds genreId to band
Band.belongsTo(Genre);

// add genreID to user
User.belongsTo(Genre);

// populate shows bands join table
Band.belongsToMany(Show, { through: ShowsBands });
Show.belongsToMany(Band, { through: ShowsBands });

Show.sync();
Genre.sync();
User.sync();
Band.sync();
ShowsBands.sync();

db.authenticate()
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error, 'not connected');
  });

const authFunc = (profile) => {
  console.log(profile, 'profile');
  return User.findOne({
    where: {
      googleId: profile.id,
    },
  });
};

// const addBio = async (data) => {
//   const bio = User.build({ bio: data.bio });
//   await bio.save().then((user) => console.log(user));
// db.query(`INSERT INTO user (bio) VALUES ('${data.bio}');`, (error, results) => {
//   if (error) {
//     console.error('Could not add bio', error);
//   }
//   return console.log('Bio added', results.affectedRows);
// });
// };

// const updateBio = (data) => {
//   db.query(`UPDATE user SET bio = '${data.bio}';`), (error, results) => {
//     if (error) {
//       console.error('Could not update bio', error);
//     }
//     return console.log('Bio updated', results.affectedRows);
//   };
// };

// const addStatus = (data) => {
//   db.query(`INSERT INTO user (status) VALUES ('${data.status}');`, (error, results) => {
//     if (error) {
//       console.error('Could not add status', error);
//     }
//     return console.log('Status added', results.affectedRows);
//   });
// };

// const updateStatus = (data) => {
//   db.query(`UPDATE user SET status = '${data.status}';`), (error, results) => {
//     if (error) {
//       console.error('Could not update bio', error);
//     }
//     return console.log('Bio updated', results.affectedRows);
//   };
// };

module.exports = {
  db,
  Show,
  Genre,
  User,
  ShowsBands,
  authFunc,
  // addBio,
  // updateBio,
  // addStatus,
  // updateStatus,
};

// const dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'radma',
// });

// db.connect((error) => {
//   if (error) {
//     console.log(error, 'Not  quite there yet, partner');
//   } else {
//     console.log('Yayyyyy database is connected!');
//   }
// });
