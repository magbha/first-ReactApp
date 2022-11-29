import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const TopBar = () => {
  return (
    <div>
    <Navbar className="nav">
        <Container>
          <Navbar className={"logo"} href="#home">
            MAG
          </Navbar>
          <Nav className={"lists"}>
            <Nav className={"list home"} href="#home">
              Home
            </Nav>
            <Nav className={"list"} href="#features">
              Skills
            </Nav>
            <Nav className={"list"} href="#pricing">
              About
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopBar