const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const Users = require("../models/Users");

const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
router.post('/api/newEmployerAccount', (req, res) => { 
   
     let name = req.body.fullName;        
     let username = req.body.userID;
     let password = req.body.password;
     let confirmPassword = req.body.confirmPassword;
     let email = req.body.email;
     console.log("/newAccount")

    Users.findOne({
        where: {
            username: username
        }
    }).then((results) => {
        if(results){
            console.log(results)
            res.status(400).json("Username is already taken")
        } else {
            Users.findOne({
                where: {
                    email: email
                }
            }).then((results) => {
                if(results){
                    console.log("exists")
                    res.status(400).json("Account already exists")
                } else {
                    if(regex.test(password)){
                        if(password == confirmPassword){
                            const hashedPassword = bcrypt.hashSync(password, 10)
                
                            Users.create({
                                name: name,
                                username: username,
                                email: email,
                                password: hashedPassword,
                                usertype: 1
                            })
                
                            res.status(200).json("Successfully created")
                        }else {
                            res.status(400).json("Passwords do not match")
                        }
                    }else {
                        res.status(400).json("Password must contain certain values")
                    }
                }
            })
        }
    })
 })

 router.post('/api/newShift', (req, res) => {
     console.log(req.body);
     console.log(req.session)
 })

 
 module.exports = router;