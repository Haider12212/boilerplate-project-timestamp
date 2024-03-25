const User = require("../model/User")
const app = require("express")()
app.use(require("express").json())

exports.register = async (req, res) => {
    const {username, password} = req.body
    if(!username || !password) {
        return res.json({error: "Please fill in all fields"})
    }
    if(password.length < 6) {
        return res.json({error: "Password must be at least 6 characters"})
    }
    try {
        const user = await User.create({
            username,
            password
        })
        return res.json({message: "User created successfully"})
    } catch (error) {
        return res.json({error: "User already exists"})
    }
}
exports.login = async (req, res, next) => {
    try {
    const { username, password } = req.body
      const user = await User.findOne({ username, password })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }