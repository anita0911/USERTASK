var express = require('express');
const conn = require('../mconnect');
var router = express.Router();




/* GET users listing. */
router.get('/submituser',function(req,res,next) {
 res.render('submituser');
  });


  router.post('/submituser',function(req,res,next) {
  conn.connFun().then(async (db) => {
  const collection = db.collection('ULOGIN');
  const insertResult = await collection.insertOne(req.body);
  console.log('Found documents=>',insertResult);
  console.log(insertResult);
  }).catch((e) => {
     console.log(e);
  }); 
  res.redirect('/UserForm');

});
   
  module.exports = router;
