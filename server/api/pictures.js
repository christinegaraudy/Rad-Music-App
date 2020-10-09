const { Router } = require('express');

const Pictures = Router();

Pictures.get('/', (req, res) => {
  res.send('test');
});

Pictures.post('/save', (req, res) => {

});

module.exports = {
  Pictures,
};
