//comment: we need to get createUser variable from front end

router.post('/createUser', (req, res, next) => { 
   
   console.log(req.body);
   let user_id = req.body.user_id;
    let name = req.body.name;        
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let usertype = req.body.usertype;

//comment: we need name of the database from front end user
  let baseSQL = 'INSERT INTO users (user_id, name, username, email, password,      usertype, created) VALUES(?, ?, ?, ?, ?, ?, now())';
    db.query(baseSQL, [user_id, name, username, email, password, usertype]).then(([results, fields]) => {
        if(results && results.affectedRows) {
            res.send('user was registered');
        }
        else {
            res.send('user was not registered');
        }
    })
})

module.exports = router;
