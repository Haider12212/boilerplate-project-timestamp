const Mongoose = require('mongoose');
const localDB = "mongodb+srv://Admin:G2ArfGpCZNo0vJA3@cluster0.f8roazj.mongodb.net/"
const connectDB = async () => {
    try {
        await Mongoose.connect(localDB, {
            
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed : ', error.message);
    }
}
module.exports = connectDB;