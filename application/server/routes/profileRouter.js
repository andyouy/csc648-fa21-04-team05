const express = require('express');
const router = express.Router();
const Users = require("../models/Users");


router.post('/api/getEditedProfile', (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    }).then(results => {
        console.log(results)
        res.status(200).json(results)
    })
})

router.put('/api/editProfile', (req, res) => {
    if(req.body.phoneNumber.length > 10 || req.body.phoneNumber.length < 10){
        res.status(400).json("invalid phone number")
    }else {
        Users.update(
            {
                phone: req.body.phoneNumber,
                address: req.body.address,
                bio: req.body.bio
            },
            {
                where: {
                    username: req.body.userID
                }
            }
        ).then((results) => {
            if(results){
                res.status(200).json("Successfully edited")
            }
        })
    }
})
module.exports = router;