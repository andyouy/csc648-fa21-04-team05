const db = require('../config/database');
const UserModel = {};

UserModel.authenticate = (username, password) => {
    let userId;
    let baseSQL = "SELECT id, username, password FROM users WHERE username=?";
    return db.execute(baseSQL, [username])
    .then(([results, fields]) => {
        if(results && results.length == 1) {
            userId = results[0].id;
            return compare(password, results[0].password);
        }else{
            return Promise.reject(-1);
        }
    })
    .then((passwordsMatched) => {
        if(passwordsMatched){
            return Promise.resolve(userId);
        }else{
            return Promise.resolve(-1);
        }
    })
    .catch((err) => Promise.reject(err));
}

module.exports = UserModel;