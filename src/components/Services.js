import React, { useEffect } from 'react'
// import Swiper, { Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import AOS from 'aos'
import "aos/dist/aos.css";
import telescopeImage from '../images/servicesImages/telescope.png'
import ufoImage from '../images/servicesImages/ufo.png'
import robotImage from '../images/servicesImages/robot.png'
import satelliteImage from '../images/servicesImages/satellite.png'
import dishImage from '../images/servicesImages/dish.png'
import carouselarrow_left from '../images/servicesImages/carousel-arrow.webp'
import ServicesCards from './ServicesCards.js'
import './Services.css'


// const swiper = new Swiper();

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     modules: [Navigation],
//     direction: 'horizontal',
//     loop: false, 
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });
  
function Services() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      return (
        <section id="services" className="services default-padding-4">
            <h3 className="section-title" data-aos="fade-right">Our Services</h3>
            <p className="section-text" data-aos="fade-right">Excellently built products that perform at scale <a href="#" className="read-more hover-bold hover-rocket">read more</a></p>
            <div className="services-carousel swiper">
                <div className="services-cards swiper-wrapper d-flex jcsb">
                    <ServicesCards image={telescopeImage} text="Product" text2="Discovery" />
                    <ServicesCards image={ufoImage} text="Product" text2="Design" />
                    <ServicesCards image={robotImage} text="Product" text2="Development" />
                    <ServicesCards image={satelliteImage} text="Emerging" text2="Technology" />
                    <ServicesCards image={dishImage} text="Digital" text2="Transformation" />
                </div>
                <div className="services-carousel_controls d-flex jcsb y-center">
                    <div className="left-control">
                        <img src={carouselarrow_left} alt="Left Control" className="swiper-button-prev"/>
                    </div>
                    <div className="right-control">
                        <img src={carouselarrow_left} alt="Right Control" className="swiper-button-next"/>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Services
