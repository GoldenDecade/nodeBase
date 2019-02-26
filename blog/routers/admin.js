const express = require('express');

const router = express.Router();

router.get('/user132', (req, res, next)=> {
  // res.append("Content-Type", "application/json;charset=utf-8" )
  // res.append("Access-Control-Allow-Origin", "*")
  // res.json({a: 'admin - user'});
  res.send('123')
})
router.post('/user1', (req, res, next)=> {
  // res.append("Access-Control-Allow-Origin", "*")
  res.send({a: 'postadmin - user'});
})

module.exports = router;

