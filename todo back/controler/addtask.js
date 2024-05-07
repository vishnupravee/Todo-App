const users= require("../schemafunction/schemaone")

const posttaskfunction=async(req,res)=>{

    
    const{Task,Domainname}=req.body;
    
    
    console.log(req.body)
    const userDetails=await users.create({
        Task,
        Domainname
        
      

        })
        res.json( userDetails)
}


module.exports=posttaskfunction