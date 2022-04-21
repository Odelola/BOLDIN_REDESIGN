import React from 'react'
import spaceJoggler from '../ServicesPage_images/headerImages/spaceJoggler.svg'
import './Header.css'

function Header() {
    return (
        <header className="hero default-padding-2 bg-primary">
            <div className="hero-inner d-flex jcsb">
                <div className="hero-text d-flex flex-column x-center column-45">
                    <h4 className="section-title-white text-bold">Services</h4>
                    <h3 className="section-text-white text-bigger line-height-bigger mx-2">Excellently built products that perform at scale</h3>
                    <button className="btn btn-secondary hover-bold hover-rocket">Work With Us</button>
                </div>
                <div className="hero-image column-40">
                    <img src={spaceJoggler} alt="Astronaut's image" />
                </div>
            </div>
        </header> 
    )
}

export default Header;
