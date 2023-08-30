import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/1022-logo.png"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Tiktok from "../images/tiktok.svg"
import { Container, Image, Nav } from "react-bootstrap"

const Sidebar = () => {
  return (
    <Container
      fluid
      className="py-4 justify-content-center"
      style={{ maxWidth: "200px", minWidth: "150px" }}
    >
      <Nav
        id="sidebar-pages"
        defaultActiveKey="#home"
        className="flex-column align-items-center text-center"
      >
        <Image src={Logo} className="mb-1" />
        <Nav.Link href="#home" className="link-dark">
          Home
        </Nav.Link>
        <Nav.Link href="#menu" className="link-dark">
          Menu
        </Nav.Link>
        <Nav.Link href="#about" className="link-dark">
          About Us
        </Nav.Link>
        <Nav.Link href="#catering" className="link-dark">
          Catering
        </Nav.Link>
        <Nav.Link href="#apparel" className="link-dark">
          Apparel
        </Nav.Link>
        <Nav.Link href="#hourslocation" className="link-dark">
          Hours & Location
        </Nav.Link>
      </Nav>
      <hr className="opacity-75" />
      <Nav id="sidebar-social" className="justify-content-center">
        <Nav.Link href="#home" className="px-1">
          <Image src={Facebook} width="25px" />
        </Nav.Link>
        <Nav.Link href="#home" className="px-1">
          <Image src={Instagram} width="25px" />
        </Nav.Link>
        <Nav.Link href="#home" className="px-1">
          <Image src={Tiktok} width="25px" />
        </Nav.Link>
      </Nav>
    </Container>
  )
}

export default Sidebar
