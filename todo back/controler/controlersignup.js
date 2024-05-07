const user= require("../schemafunction/schema")
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
const Schemafunction=async(req,res)=>{

    const{Name,Email,password}=req.body;
    const moon= await user.findOne({Email})
    const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt)
    if(!Name||!Email||!password){
        res.json("plz enter the data")
        
}
else if(password.length<=6){
    res.json("atleast 6 bit needed")
}
else if(!moon){
    const userDetails=await user.create({
        Name,
        Email,
        password:hashpassword
        })
        res.json({
        Name:userDetails.Name,
        Email:userDetails.Email,
        password:userDetails.password,
        Tocken:generateTocken (userDetails.Name)
        
        })
}
else{
res.json("user all ready exist")
}    

}


const generateTocken=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'1d',
})
}

module.exports=Schemafunction