const users= require("../schemafunction/schemaone")

const getfunction=async(req,res)=>{

    
    const mate=await users.find()
    
    res.json(mate)

}
module.exports=getfunction