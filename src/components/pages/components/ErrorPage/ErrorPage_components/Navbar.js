import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FullScreenNav from '../../../../FullScreenNav'
import companyLogo from '../ErrorPage_images/navbarImages/Boldin_White.webp'
import './Navbar.css'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [contact, setContact] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
        setContact(!contact);
    }
    return (
        <>
        <nav className={toggle ? "navigation d-flex jcsb default-padding bg-primary anim-none active" : "navigation d-flex jcsb default-padding bg-primary anim-none"} >
            <div className="logo">
                <img src={companyLogo} alt="Company's Logo"  />
            </div>
            <div className="menu d-flex x-center y-center">
                <Link to="/" className="contact-us link text-white hover-bold hover-rocket mr-6">Work with us</Link>
                <div className="menu-toggler" onClick={handleClick}>
                    <span className="bg-white"></span>
                    <span className="bg-white"></span>
                    <span className="bg-white"></span>
                </div>
            </div>
    </nav>
    <FullScreenNav className={contact} />
    </>
    )
}

export default Navbar
