import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Adddata() {
  const navigate= useNavigate()

  const[Domainname,setDname] = useState()
  const[Task,setAsk] = useState()
     
     const changedata= async()=>{
      try{
        const config={
          headers:{
            "content-type":"application/json"
          },
        }
        const mata=await axios.post("http://localhost:3000/addd",{Domainname,Task},config)
        console.log(mata)

        navigate('/tod')
      }catch(error){
        console.log(" not ",error)
      }
    }
  
  return (
    <div>
         <Form style={{width:"500px",marginLeft:"80px",marginTop:"50px"}}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Domain name</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setDname( e.target.value)} placeholder="Enter Domain name" />
        <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setAsk(e.target.value)} placeholder="Enter task name" />
         <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>

      
<Button  onClick={changedata} variant="warning" type="submit">
        Add
      </Button>
    </Form>
    </div>
  )
}

export default Adddata