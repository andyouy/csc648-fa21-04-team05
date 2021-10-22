const express = require('express');
const router = express.Router();

const db = require('../config/database');

router.post('/login', (req, res, next) => { 
   
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;

    UserModel.authenticate(username, password)
    .then((loggedUserId) => {
        if (loggedUserId) {
          console.log(`User ${username} is logged in`);
          res.send(`user ${username} has successfully logged in `)
        } else {
          throw new UserError("Invalid username and/or password!", "/login", 200);
        }
      })
      .catch((err) => {
        console.log("user login failed");
        if (err instanceof UserError) {
          console.log("err")
        } else {
          next(err);
        }
      })
 })
 
 module.exports = router;