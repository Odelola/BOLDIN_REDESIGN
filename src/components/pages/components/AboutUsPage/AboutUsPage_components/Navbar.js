import React, {useState} from 'react'
import {Link} from "react-router-dom"
import companyLogo from '../AboutUsPage_images/navbarImages/BOLDIN_LOGO.webp'
import FullScreenNav  from '../../../../FullScreenNav'
import '../AboutUsPage_components/Navbar.css'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [contact, setContact] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
        setContact(!contact);
    }
    return (
        <>
        <nav className={toggle ? "navigation d-flex jcsb default-padding active" : "navigation d-flex jcsb default-padding"}>
            <div className="logo">
                <img src={companyLogo} alt="mallam" />
            </div>
            <div className="menu d-flex x-center y-center">
                <Link to="/about" className="contact-link link hover-bold hover-rocket">Work with us</Link>
                <div className="menu-toggler-alt" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        <FullScreenNav className={contact} />
        </>
    )
}

export default Navbar
