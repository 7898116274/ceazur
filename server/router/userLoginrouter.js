const express = require('express')

const userLoginRouter = express.Router()

const { loginpost, verifyUser, verifydetails } = require("../controller/userController")

userLoginRouter.post('/user/login', loginpost);

userLoginRouter.get('/api/user/verify', verifyUser, verifydetails);


module.exports = userLoginRouter;