const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const Users = require("../models/Users");
const Shifts = require("../models/Shifts");
const sequelize = require('../config/database');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
                            console.log("here")
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
     console.log(req.params)
     console.log(req.body);
     console.log(req.session)
     if(req.body.shiftTitle === "" || 
        req.body.location === "" || 
        req.body.time === "" ||
        req.body.date === "" ||
        req.body.minPay === ""){
            res.status(400).json("fields empty")
        } else {
            Shifts.create({
                title: req.body.shiftTitle,
                location: req.body.location,
                time: req.body.time,
                date: req.body.date,
                length: req.body.length,
                createdBy: req.session.realname,
                minPay: req.body.minPay
            })
            res.status(200).json("sucessfully created shift")
        }
 })

 router.post('/api/getShifts', (req, res) => {
    console.log(req.body);
    console.log(req.session)
    Shifts.findAll({
        where: {
            createdBy: req.session.realname,
            claimedBy: null
        }
    }).then((results) => {
        console.log(results)
        res.status(200).json(results)
    })
})

router.post('/api/getEmployerClaimedShifts', (req, res) => {
    console.log(req.body);
    console.log(req.session)
    Shifts.findAll({
        where: {
            createdBy: req.session.realname,
            claimedBy: {
                [Op.not]: null
            }
        }
    }).then((results) => {
        console.log("here@@@@@@@@@@@@@@@@@@@@@@")
        console.log(results)
        res.status(200).json(results)
    })
})


router.delete('/api/deleteShift/:id', (req, res) => {
    Shifts.destroy({
        where: {shiftID: req.params.id}
    }).then((results) => {
        if(results) {
            res.status(200).json("Successfully delete")
        }
    })
})

router.post('/api/getEditShift', (req, res) => {
    Shifts.findOne({
        where: {
            shiftID: req.body.id
        }
    }).then(results => {
        console.log(results)
        res.status(200).json(results)
    })
})
 
router.put('/api/editShift', (req, res) => {
    Shifts.update(
        {
            title: req.body.shiftTitle,
            location: req.body.location,
            time: req.body.time,
            date: req.body.date,
            minPay: req.body.minPay
        },
        {
            where: 
            {
                shiftID: req.body.id
            }
        }
    ).then((results) => {
        if(results){
            console.log(results)
            res.status(200).json("Successfully edited")
        }
    })
})

router.post('/api/getRecentShifts', (req, res) => {
    Shifts.findAll(
        {
            order: [['createdAt', 'DESC']],
            limit: 9,
            where:
            {
                claimedBy: null
            }
        },
    ).then((results) => {
        console.log(results)
        res.status(200).json(results)
    })
})
 module.exports = router;