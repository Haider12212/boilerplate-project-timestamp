const User = require("../model/User")
const app = require("express")()
app.use(require("express").json())

const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.json({ error: "Please fill in all fields" });
    }
    if (password.length < 6) {
        return res.json({ error: "Password must be at least 6 characters" });
    }
    try {
        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

        // Creating user with hashed password
        const user = await User.create({
            username,
            password: hashedPassword // Storing the hashed password in the database
        });
        return res.json({ message: "User created successfully" });
    } catch (error) {
        return res.json({ error: "User already exists" });
    }
};
 // Assuming User model is defined somewhere

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            });
        }

        // Comparing hashed password from database with the provided password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Login not successful",
                error: "Invalid password",
            });
        }

        // If password is valid, login is successful
        res.status(200).json({
            message: "Login successful",
            user,
        });
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};
