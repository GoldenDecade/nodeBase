const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=> {
  res.render('main', {
    name: 'wq',
    sex: 'gender',
    content: 'hello'
  })
})

module.exports = router;