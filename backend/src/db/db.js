const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://radiant:radiant12@radiant-smiles.t2vouni.mongodb.net/smiles")
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }    
};

module.exports = connectDB;