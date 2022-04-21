import React, {useEffect} from 'react';
import ctaImage from '../images/ctaImages/ctaImage.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Cta.css'

function Cta() {
    useEffect(() => {
      AOS.init()
      AOS.refresh()
    }, [])
    
    return (
        <section id="cta" className="cta default-padding-2">
            <div className="cta-inner d-flex jcsb">
                <div className="cta-text column-55">
                    <h3 className="section-title" data-aos="fade-right">Work with us</h3>
                    <p className="section-text" data-aos="fade-right">Have a bold idea you want to build? Talk to us about it. Let's help you power it.</p>
                    <a href="#" className="btn btn-primary hover-bold hover-rocket">Let's Talk</a>
                </div>
                <div className="cta-image column-40">
                    <img src={ctaImage} alt="Cta's Image" />
                </div>
            </div>
    </section>
    )
}

export default Cta;
