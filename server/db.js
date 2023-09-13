const mongoose=require('mongoose');
require('dotenv').config()
const connection = mongoose.connect(`mongodb+srv://tusharsapate34:uB6J8uQE9iCibSGy@cluster0.h2hreve.mongodb.net/TravelDB`)


module.exports={connection};