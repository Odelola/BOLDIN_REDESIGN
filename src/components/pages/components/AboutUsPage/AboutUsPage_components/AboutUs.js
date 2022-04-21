import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutUsValueCards from '../AboutUsPage_components/AboutUsValueCards'
import astronautInBoxImage from '../AboutUsPage_images/aboutImages/astronautInBox.webp'
import ourStoryImage from '../AboutUsPage_images/aboutImages//Our Story.webp'
import about_values1 from '../AboutUsPage_images/aboutImages/about_values1.webp'
import about_values2 from '../AboutUsPage_images/aboutImages/about_values2.webp'
import about_values3 from '../AboutUsPage_images/aboutImages/about_values3.webp'
import about_values4 from '../AboutUsPage_images/aboutImages/about_values4.webp'
import about_values5 from '../AboutUsPage_images/aboutImages/about_values5.webp'
import './AboutUs.css'

function AboutUs() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="about" className="about">
        <div className="about-inner">
            <div className="about-columns identity">
                <div className="identity-inner default-padding-2 d-flex" data-aos="fade-right">
                    <div className="about-columns_text column-55">                 
                        <h3 className="section-title text-bold text-primary text-medium">Who we are</h3>
                        <p>We believe the beauty of life is a function of our experiences and we can make people’s life beautiful by giving them amazing human experiences from the quality of the products we build.</p>
                        <p>This has been our mandate since our inception as we continuously gather resources and expertise to create a quality user experience and solve problems that hinder our client’s from reaching their business goals.</p>
                        <p>We have the courage to the extra mile to get things done.</p>
                    </div>  
                    <div className="about-columns_image d-flex x-center column-45">
                        <img src={astronautInBoxImage} alt="Who we are Image" />
                    </div>
                </div>
            </div>
            <div className="about-columns story d-flex default-padding-2" data-aos="fade-right">
                <div className="about-columns_text column-45">                 
                    <h3 className="section-title text-bold text-primary text-medium">Our Story</h3>
                    <p>Our founders set out to build a product studio that will cater to the growing needs of software products among startuppers, small, and large enterprises. Alongside building products as a service, the company was also tasked to spot problems they can solve and build proprietary solutions to solve them.</p>
                    <p>We are keeping the light of the vision that birthed Boldin and pursuing the mission without respite.</p>
                </div>
                <div className="about-columns_image d-flex flex-center column-55">
                    <img src={ourStoryImage} alt="Who we are Image" />
                </div>
            </div>
            <div className="about_values default-padding-2">
                <h3 className="section-title text-bold text-primary text-medium">Our Values</h3>
                <div className="about_values_cards-container d-flex jcsa">
                    <AboutUsValueCards image={about_values1} alt="About cards Image 1"  cardText="Excellence" />
                    <AboutUsValueCards image={about_values2} alt="About cards Image 2"  cardText="Trust" />
                    <AboutUsValueCards image={about_values3} alt="About cards Image 3"  cardText="Empathy" />
                    <AboutUsValueCards image={about_values4} alt="About cards Image 4"  cardText="Continuous" cardText2="innovation" />
                    <AboutUsValueCards image={about_values5} alt="About cards Image 5"  cardText="Collaboration" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutUs
