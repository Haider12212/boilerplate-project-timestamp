const express = require("express");
const authRouter = require("./auth/route");
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", authRouter);
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));
const connectDB = require('./db');
connectDB();
