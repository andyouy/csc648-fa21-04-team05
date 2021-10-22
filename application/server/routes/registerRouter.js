const express = require('express');
const router = express.Router();

const db = require('../config/database');

router.post('/newAccount', (req, res, next) => { 
   
    console.log(req.body);
    console.log("test")
     let name = req.body.fullName;        
     let username = req.body.userID;
     let email = req.body.email;
     let password = req.body.password;
     let usertype = 1;
 
 //comment: we need name of the database from front end user
   let baseSQL = 'INSERT INTO user (name, username, email, password, usertype) VALUES( ?, ?, ?, ?, ?)';
     db.query(baseSQL, [name, username, email, password, usertype]).then(([results, fields]) => {
         if(results && results.affectedRows) {
             res.send('user was registered');
         }
         else {
             res.send('user was not registered');
         }
     })
 })

 router.get('/getAllUsers', (req, res, next) => {
    console.log("working");
    let baseSQL = 'SELECT * from user';
    db.query(baseSQL).then(([results, fields]) => {
        console.log(results);
        res.send(results);
    })
    .catch((err) => {
        next(err);
    });
})
 
 module.exports = router;