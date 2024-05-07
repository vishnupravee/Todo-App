const mongoose=require("mongoose")

const userschema=mongoose.Schema({
   
    Task:{type:String},
    Domainname:{type:String}
    
})
const users=mongoose.model("tasc",userschema)
module.exports=users