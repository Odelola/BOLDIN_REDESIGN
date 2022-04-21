import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../images/navigationImages/BOLDIN_LOGO.webp'
import Contact from './Contact';
import FullScreenNav from './FullScreenNav';
import './Navbar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);
    const [contact, setContact] = useState(false);
    const [hellocontact, setHellocontact] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
        // setContact(!contact);
    }
    const helloThere = () => {
        setHellocontact(!hellocontact);
        console.log("mallam")
    }
  //   const nav = useRef(null)
  // function removeMenuActive2(){
  //   nav.current.classList.toggle('active');
  // }
// const contactSec = useRef(null)
// function removeContactSec(){
// contactSec.current.classList.toggle('active');
  return (
    <>
    {/* <nav className={!toggle ? "navigation home-navigation d-flex jcsb default-padding active" : "navigation home-navigation d-flex jcsb default-padding"}> */}
      <nav className="navigation home-navigation d-flex jcsb default-padding">
        <div className="logo">  
            <img src={companyLogo} alt="mallam" />
        </div>
        <div className="menu d-flex x-center y-center">
            <a href='#' className="contact-link link hover-bold hover-rocket" onClick={helloThere}>Work with us</a>
            <div className="menu-toggler-alt" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
      <FullScreenNav className={toggle} />
      <Contact className={hellocontact} />
      </>
  );
}
// className2={fullnavalt => setFullnavalt(fullnavalt)}
export default Navbar;