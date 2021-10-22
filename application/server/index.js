const express = require("express");



const PORT = process.env.PORT || 3001;

const app = express();

//Routes
const registerRouter = require('./routes/registerRouter.js')
const loginRouter = require('./routes/loginRouter.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(registerRouter);
app.use(loginRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


