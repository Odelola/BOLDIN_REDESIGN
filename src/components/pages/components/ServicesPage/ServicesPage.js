import React from 'react'
import Navbar from './ServicesPage_components/Navbar'
import Header from './ServicesPage_components/Header'
import Offerings from './ServicesPage_components/Offerings'
import Benefits from './ServicesPage_components/Benefits'
import Newsletter from './ServicesPage_components/Newsletter'
import Footer from './ServicesPage_components/Footer'
import '../.././App.css'

import './ServicesPage_components/Navbar.css'

function ServicesPage() {
    return (
        <>
        <Navbar />
        <Header />
        <Offerings />
        <Benefits />
        <Newsletter />
        <Footer />
        </>
    )
}

export default ServicesPage;
