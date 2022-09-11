var express = require('express');
const conn = require('../mconnect');
var router = express.Router();




/* GET users listing. */
router.get('/updel',function(req,res,next) {
 res.render('submituser');
  });


  router.put('/updel',function(req,res,next) {
  conn.connFun().then(async (db) => {
  const collection = db.collection('ULOGIN');
  const updateResult = await collection.updateOne({password:req.body.password},{$set:req.body});
   console.log('Updated documents =>', updateResult);
  console.log(updatedResult);
  }).catch((e) => {
     console.log(e);
  }); 
  resp.send({status:"updated"})

});
   
  module.exports = router;
