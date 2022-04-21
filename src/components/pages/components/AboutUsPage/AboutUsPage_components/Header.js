import React from 'react'
import './Header.css'

function Header() {
    return (
        <header class="banner default-padding-2">
            <div class="banner-text">
                <h4 class="section-title-white text-bold">About us</h4>
                <h3 class="section-text-white text-bigger line-height-bigger mx-2">We are the <span class="">bold ones</span></h3>
                <p class="section-text-white">A team of bold innovators driven to help you achieve your business goals.</p>
                <button class="btn btn-secondary hover-bold hover-rocket">Work With Us</button>
            </div>
            <div class="scroll-animation">
                <div class="mouse d-flex x-center">
                    <span class="mouse-ball"></span>
                </div>
            </div>
            <div class="scroll-text hover-bold">Scroll down</div>
        </header>
    )
}

export default Header
