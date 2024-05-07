const mongoose=require("mongoose")

const userschema=mongoose.Schema({
   
    Email:{type:String},
    password:{type:String},
    Name:{type:String}
})
const user=mongoose.model("todo",userschema)
module.exports=user