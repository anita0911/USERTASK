var express = require('express');

var router = express.Router();




router.get('/UserForm',function(req,res,next) {
res.render('login',{errMsg:'',msg:''});
    });
   
   
    router.post('/UserDetails',function(req,res,next) {
    res.render('submituser');
      });
      
  
      
  module.exports = router;
