const user = require("../schemafunction/schema");

const bcrypt=require("bcrypt")
const login=async(req,res)=>{

    const{Email,password}=req.body;
   
    const jas= await user.findOne({Email})
      
    
       
    
        if(jas){
            if(jas.Email===Email&&bcrypt.compare(password,jas.password))
            {

            console.log("succcess");
                    res.json("log in success")
            }
                
            else  {
               
            res.json("log in faild")
            console.log("failed");  
            }
        }
        else  {
               
            res.json("log in faild")
            console.log("failed");  
            }
        }

        
 


module.exports=login