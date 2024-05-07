import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

function Todotable() {
  const[net,setnet]= useState([])
  function fetchAll(){
 
      axios.get('http://localhost:3000/view')
      .then((Responses)=>{
          console.log(Responses)
         setnet(Responses.data)

      })
    }
    useEffect(()=>{
   
       
fetchAll()
    },[])
  
  console.log(net);
  return (
    <div>
      <div>
      
            <Table style={{margin:"50px"}} striped bordered hover variant="dark">
      <thead>
       
        <tr>
          <th>#</th>
          <th>Domain Name</th>
          <th>Task Name</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {net.map((value)=>
        
        <tr>
          <td><h1>.</h1></td>
          <td>{value.Domainname}</td>
          <td>{value.Task}</td>
          <td><RemoveItem id={value._id} fetchAll={fetchAll}/></td>
         
        </tr>
       
        
       
      
        
        )}
      
      </tbody>

    </Table>
    
</div>
<div style={{margin:"70px"}}>
  <Button variant='warning' href='/add'>Add Details</Button>
</div>
    </div>

        
  )
}
function RemoveItem({id,fetchAll}){
  async function handleDelete(){
    await axios.delete("http://localhost:3000/dele/"+id)
    fetchAll()
  }
  return <Button   onClick={handleDelete}>Delete</Button>
}

export default Todotable