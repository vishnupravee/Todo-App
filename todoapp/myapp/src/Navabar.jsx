import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
function Navabar() {
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >TASK MANAGEMENT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/tod">Home</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navabar