import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {
    const [Email, setEmail] = useState("")
    const [password, setpasswords] = useState("")
    const navigate = useNavigate()

    const changedata = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                },
            }
            const bata = await axios.post("http://localhost:3000/sin", { Email, password }, config)
            console.log(bata)

            if (bata.data === "log in success") {
                
                console.log(bata)

                return navigate("/tod")
            }
            
            alert("Invalid email or password")
        
        } catch (error) {
            console.log("Invalid email or password")
            console.log("could not  login", error)
        }
    }




    return (
        <div>
            <Form style={{width:"500px",marginLeft:"80px",marginTop:"50px"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setpasswords(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={changedata} variant="primary" type="submit">
                    Submit
                </Button> <Button variant="warning" href='/reg'>
                    Register</Button>

            </Form>
        </div>
    )
}

export default Register