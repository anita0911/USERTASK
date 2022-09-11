const jwt = require('jsonwebtoken');
const verifyJwtAuth = (token) => {
 return new Promise((resolve, reject) => {
const privateKey = '!@#DFTbnhu*';
 jwt.verify(token, privateKey, function(err, decoded) { // step -5 verifying token
 if (err) {
reject('Verification Failed');
 } else {
 if (decoded.foo === 'bar') {
console.log('Token verified succesfully');
 resolve('Verified Successfully');
 }
 }
        });
    })
}

module.exports=verifyJwtAuth;