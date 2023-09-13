const mongoose=require('mongoose');
require('dotenv').config();

const ProductSchema=mongoose.Schema({
    Country:{type:String},
    name: {type:String},
    url:{type:String},
    description:{type:String},
    cost: {type:Number},
    title:{type:String},
    heading: {type:String},
    urls: {type:String},
    url1:{type:String},
    url2:{type:String},
    url4:{type:String},
    url3:{type:String},
    guestDetail:{type:String},
    description1: {type:String}
})


const ProductModel=mongoose.model('Travel',ProductSchema)

module.exports={ProductModel}