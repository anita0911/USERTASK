var express = require('express');
var router = express.Router();
const conn = require('../mconnect');
const jwt = require('jsonwebtoken');

router.post('/auth',function(req,res,next) {
    const privateKey = '!@#DFTbnhu*';
    if (req.body.logid && req.body.password) {
     conn.connFun().then(async (db) => {
    const collection = db.collection('ULOGIN');
     const findResult = await collection.find({}).toArray();
     console.log('Found documents=>',findResult.length);
     console.log('Found documents=>',findResult);
     if (findResult.length) {
      try {
      const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' }); 
     const info = {
      username: findResult[0].logid,
      code: token,
      role: 'ULOGIN'
      }
      res.cookie('info', info);
      res.redirect('/welcome')
      }catch(err) {
      res.render('login', { errMsg: err});
      }
   
      } else {
      res.render('login', { errMsg: 'Record not found or invalid user name password'});
      }
      }).catch((e) => {
       console.error(e);
           })
        }else {
           res.render('login', { errMsg: 'Enter logid and password'});
       }
   });

   
router.get('/welcome',function(req,res,next) {
    res.render('welcome',{msg:''});
        });
       
   
   module.exports = router;
    