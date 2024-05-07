import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const[Name,setName] = useState("")
  const[Email,SetEmail]= useState("")
  const[password,setPassword]= useState("")
  const navigate = useNavigate()
  const changetext=async(event)=>{
    event.preventDefault();
    try{
      const config={
        headers:{
          "content-type":"application/json"
        },
      }
      const data=await axios.post("http://localhost:3000/pull",{Name,Email,password},config)
      if(data.data=="plz enter the data"){
        alert("plz enter data" )
      }
      else if(data.data=="atleast 6 bit needed"){
        alert("atleast 6 bit")
      }
      else if(data.data==Name,Email,password){
         return navigate("/")
      }
      console.log(data)
     
    
  
   
    }catch(error){
      console.log("could not sign up",error)
    

   }
    
  
    
    
  }
  
    
  
  
  return (
    <div>
         <Form style={{width:"500px",marginLeft:"80px",marginTop:"50px"}}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
        <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  onClick={changetext} variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    </div>
  )
}

export default Login