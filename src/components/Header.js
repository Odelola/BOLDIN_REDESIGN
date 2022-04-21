import React from 'react';
import spaceman from '../images/headerImages/spaceman.svg'
import './Header.css';

function Header() {
    return (
        <header className="header default-padding-4">
        <div className="header-row d-flex jcsb">
            <div className="header-text y-center column-45">
                <h4>Innovators with <span>bold ideas</span></h4>
                <p>We power bold innovations for individuals and businesses</p>
                <a href="#" className="btn btn-primary hover-rocket">Get Started</a>
            </div>  
            <div className="header-image column-45">
                <img src={spaceman} alt="Boldin's spaceman greeting you"/>
            </div>  
        </div>
        <div className="scroll">
            <div className="scroll-animation d-flex flex-center">
                <div className="mouse">
                    <span className="mouse-ball"></span>
                </div>
            </div>
            <a href="#services" className="scroll-down">Scroll down</a>
        </div>
    </header>
    )
}

export default Header
