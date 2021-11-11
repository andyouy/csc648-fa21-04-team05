const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const Users = require("../models/Users");
const Shifts = require('../models/Shifts');

const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

 router.post('/api/newEmployeeAccount', (req, res) => { 
   
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
                               usertype: 0
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

//gets all unclaimed shifts
router.get("/api/getAllShifts", (req, res) => {
    Shifts.findAll({
        where:{
            claimedBy: null
        }
    })
    .then((results) => {
        console.log(results)
        res.status(200).json(results)
    })
})

//gets claimed shifts
router.post('/api/getClaimedShifts', (req, res) => {
    console.log(req.body);
    console.log(req.session)
    Shifts.findAll({
        where: {
            claimedBy: req.body.username
        }
    }).then((results) => {
        console.log(results)
        res.status(200).json(results)
    })
})

router.put('/api/dropShift', (req, res) => {
    const id = req.body.id;
    Shifts.update(
        {claimedBy: null},
        {where: {shiftID: id}}
    ).then((results) => {
        if(results){
            console.log(results)
            res.status(200).json("Successfully claimed")
        }
    })
})


module.exports = router;