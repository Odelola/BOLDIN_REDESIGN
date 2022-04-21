import React, {useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import workImage from '../images/workImages/workImage.webp'
import './Work.css'

function Work() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <section id="work" className="work default-padding-4">
        <div className="work-heading">
            <h3 className="section-title" data-aos="fade-right">Our Work</h3>
            <p className="section-text" data-aos="fade-right">We have empowered bold ideas and <br /> products in various markets <a href="#" className="read-more hover-bold hover-rocket">read more</a></p>
        </div>
        <div className="work-showcase d-flex jcsb">
            <div className="work-showcase_text  column-45">
                <h3 className="section-title" data-aos="fade-right">Boldin</h3>
                <p className="section-text" data-aos="fade-right">Nigeria Super Innovator improving Software Development Globally</p>
                <p className="section-caption" data-aos="fade-right">Web design & Development</p>
                <a href="#0" className="btn btn-secondary hover-bold hover-rocket">View Case Study</a>
            </div>
            <div className="work-showcase_image column-40">
                <img src={workImage} alt="Showcase of our work" data-aos="zoom-in" />
            </div>
        </div>
    </section>
    )
}

export default Work;
