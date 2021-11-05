const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Users = require("../models/Users");

router.post('/api/login', (req, res, next) => { 
   
    let username = req.body.username;
    let password = req.body.password;
    console.log(username)

    if(username && password){
      Users.findOne({
        where: {
          username: username
        }
      }).then((results) => {
        if(results){
          console.log(results.password)
          var comparePassword = bcrypt.compareSync(password, results.password);
          console.log(comparePassword)
          if(comparePassword){
            req.session.loggedInUser = true;             
            req.session.username = username;
            req.session.realname = results.name;
            req.session.usertype = results.usertype;
            console.log("Req.session.username: ", req.session);
            res.status(200).json(
              {
                username: results.username,
                name: results.name,
                type: results.usertype
              })
              console.log("successfully logged in")
          }else {
            console.log("incorrect password")
            res.status(400).json("incorrect password")
          }
        }else {
          console.log("user does not exist")
          res.status(400).json("user does not exist")
        }
      })
    }else {
      console.log("username and pw empty")
      res.status(400).json("username and password cannot be left empty")
    }
 })
 
 router.post('/api/logout', (req, res, next) => {
   console.log(req.session);
    req.session.destroy(err =>{
      if(err){
          console.log(err);
      }else {
        console.log("successfully destroyed session")
        res.clearCookie("session_user");
        res.send({loggedIn: false})
      }
  })

 })

 
 module.exports = router;