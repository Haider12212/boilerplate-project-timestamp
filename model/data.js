const Mongoose = require("mongoose")
const DataSchema = new Mongoose.Schema({
    //     username: "fcc_test",
    //     description: "test",
    //     duration: 60,
    //     date: "Mon Jan 01 1990",
    //     _id: "5fb5853f734231456ccb3b05"
    //   }
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
      
})
const Data = Mongoose.model("Exercise", DataSchema)
module.exports = Data