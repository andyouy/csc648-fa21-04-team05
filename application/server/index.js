const express = require("express");
const session = require("express-session");
const sequelize = require("./config/database");

const Users = require("./models/Users")

sequelize.sync()
.then((result) => {
  console.log("tables created");
}).catch((err) => {
  console.log(err)
});



//Routes
const registerRouter = require('./routes/registerRouter.js')
const loginRouter = require('./routes/loginRouter.js')

const app = express();


const sessionStore = require('./config/session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(cookieParser());

app.use(session({
    key: 'session_user',
    secret: 'shyft',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    }
}));


app.listen(3001, () => {
  console.log(`3001`);
});

app.use(registerRouter);
app.use(loginRouter);


