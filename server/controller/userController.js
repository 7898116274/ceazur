const userCollection = require("../model/userModel")
const jwt = require("jsonwebtoken")


const loginpost = async (req, res) => {
      const userContact = req.body.userContact;
      console.log(req.body)
      const options = {
            expires: new Date(Date.now() + 30 * 24 * 3600 * 10000),
            secure: true,
            httpOnly: true,
            sameSite: "none",
            path: "/"
      };
      try {
            let user = await userCollection.findOne({ userContact });
            if (user) {
                  // User found, proceed with login
                  const userData = {
                        userContact: user.userContact,
                  };


                  const token = jwt.sign(userData, "jwt-secret-key", { expiresIn: "1d" });
                  return res.status(200).cookie('token', token, options).json({ message: "User logged in successfully", data: userData });

            } else {
                  // User not found, create a new user
                  user = new userCollection({ userContact });
                  await user.save();
                  const userData = {
                        userContact: user.userContact,
                  };
                  const token = jwt.sign(userData, "jwt-secret-key", { expiresIn: "1d" });
                  return res.status(200).cookie('token', token, options).json({ message: "User registered successfully", data: userData });


            }
      } catch (error) {
            console.error("Login error:", error);
            return res.status(500).json({ error: "Internal server error" });
      }
};


const verifyUser = (req, res, next) => {
      const token = req.cookie.token;
      if (!token) {
            return res.status(401).json({ error: "Unauthorized - Missing token" });
      }

      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                  return res.status(401).json({ error: "Unauthorized - Invalid token" });
            } else {
                  req.userData = decoded;
                  next();
            }
      });
};

const verifydetails = (req, res) => {
      // This endpoint is protected, and only accessible with a valid token
      return res.json({ message: "User is authenticated", userData: req.userData });
};


module.exports = { loginpost, verifyUser, verifydetails };