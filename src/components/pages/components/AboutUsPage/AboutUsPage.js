import React from 'react'
import Navbar from './AboutUsPage_components/Navbar'
import Header from './AboutUsPage_components/Header'
import AboutUs from './AboutUsPage_components/AboutUs'
import Teams from './AboutUsPage_components/Teams'
import Newsletter from './AboutUsPage_components/Newsletter'
import Footer from './AboutUsPage_components/Footer'

import '../.././App.css'

// import './AboutUsPage_components/Navbar.css'

function ServicesPage() {
    return (
        <>
        <Navbar />
        <Header />
        <AboutUs />
        <Teams />
        <Newsletter/>
        <Footer />
        </>
    )
}

export default ServicesPage;
