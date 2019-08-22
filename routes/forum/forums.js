const express = require('express');
const router = express.Router();
const config = require('../../config.json');

router.get('/', (req, res, next) => {
  res.render('forums/forums', {
    "pagetitle": "Forums"
  });
});

module.exports = router;
