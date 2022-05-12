import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import companyLogo from '../images/fullscreenNavImages/BOLDIN_LOGO.webp'
import companyLogoWhite from '../images/fullscreenNavImages/Boldin_White.webp'
import './FullScreenNav.css'


function FullScreenNav(props) {
  const fullNav = useRef(null)
  function removeMenuActive(){
    fullNav.current.classList.toggle('active');
  }
  
    const mallamText = props.className;
    console.log(mallamText)
  // if(props.className !== mallamText){
  //   console.log("bug")
  // }
  return (
    <>
      {props.className && <header id="fullnav" className={props.className ? "fullnav active": "fullnav"} ref={fullNav}>
      <div className="fullnav-inner d-flex">
        <div className="fullnav_left column-50 default-padding">
          <img src={companyLogo} alt="Boldin's Logo" />
          <img src={companyLogoWhite} alt="Boldin's Logo White" className="d-none" />
          <div className="menu-toggler_active mobile-nav d-none" onClick={removeMenuActive}>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
        <div className="fullnav_right column-50 bg-primary default-padding">
          <nav className="menu d-flex">
            <Link to="#" className="contact-link link hover-bold hover-rocket text-white">Work with us</Link>
            <div className="menu-toggler_active" onClick={removeMenuActive}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <ul className="fullnav_links">
          <li><Link to="/about-us" className="hover-bold hover-rocket">About Us</Link></li>
            <li><Link to="#" className="hover-bold hover-rocket">Works</Link></li>
            <li><Link to="/our-services" cla  ssName="hover-bold hover-rocket">Service</Link></li>
            <li><Link to="/contact-us" className="hover-bold hover-rocket">Contact Us</Link></li>
          </ul>
          <div className="fullnav_socials">
            <p>Social</p>
              <div className="fullnav_socials-inner d-flex jcsb">
                <a href="https://www.linkedin.com" className="'text-white" target='_blank'>Linkedin</a>
                <a href="https://www.facebook.com" className="'text-white" target='_blank'>Facebook</a>
                <a href="https://www.twitter.com" className="'text-white" target='_blank'>Twitter</a>
                <a href="https://www.instagram.com" className="'text-white" target='_blank'>Instagram</a>
              </div>
            </div>
        </div>
      </div>
    </header>}
    </>
  );
}

export default FullScreenNav;
