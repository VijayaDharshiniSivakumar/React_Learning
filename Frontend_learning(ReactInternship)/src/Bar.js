import React from 'react'
import { AiFillHome} from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';
import "./NavbarStyle.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
function Bar() {
  return (
    <div>
       <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <Nav className="nav-menu">
                <AiFillHome size={30} />
                <Nav className='nav-links' href="#home">Home</Nav>
                <AiFillQuestionCircle size={30} />            
               <Nav  className='nav-links' href="#About">About</Nav>
               <BsFillBriefcaseFill size={30} />
                <Nav className='nav-links' href="#Sevice">Service</Nav>
                 <FaAddressBook size={30} />
                <Nav className='nav-links' href="#Contact">Contact</Nav>
                </Nav><button>Sign Up</button>
                   
            </nav>
    </div>
  )
}

export default Bar
