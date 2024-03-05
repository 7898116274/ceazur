const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userLoginRouter = require("./router/userLoginrouter")


const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Ceazur')
      .then(() => {
            console.log("database connected");
      })
      .catch((err) => {
            console.log("database connection error", err);
      })


app.use(cors({
      origin: ["http://localhost:3000"],
      methods: ["POST", 'GET', 'DELETE', 'PUT'],
      credentials: true
}));
app.use(express.json())
app.use(cors())
app.use(cookieParser());

app.use('/api', userLoginRouter)

app.listen(5000, () => {
      console.log("success")
})