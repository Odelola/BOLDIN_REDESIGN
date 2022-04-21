import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import benefitsImage from '../ServicesPage_images/benefitsImages/benefitsImage.webp'
import './Benefits.css'

function Benefits() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="benefits" className="benefits default-padding-2">
                <h3 className="section-title text-bold text-medium text-primary">Benefits of working with us</h3>
                <div className="benefits-inner">
                    <div className="benefits-columns">
                        <div className="benefits-column d-flex jcsb">
                            <div className="benefits-card column-20" data-aos="zoom-in">
                                <h3 className="section-title text-bold text-medium line-height-small">Visibility and Control</h3>
                                <div className="benefits-card_line d-flex jcsb">
                                    <span className="benefits-card_line_longer column-70"></span>
                                    <span className="benefits-card_line_shorter column-15"></span>
                                </div>
                            </div>
                            <div className="benefits-desc column-70">
                                <p className="text-gray" data-aos="zoom-in">Clients have a clear insight on the progress we are making with their projects as we operation a transparent policy in helping client’s monitor the product development through all the stages</p>
                            </div>
                        </div>
                        <div className="benefits-column d-flex jcsb">
                            <div className="benefits-card column-20" data-aos="zoom-in">
                                <h3 className="section-title text-bold text-medium line-height-small">One Stop Shop</h3>
                                <div className="benefits-card_line d-flex jcsb">
                                    <span className="benefits-card_line_longer column-70"></span>
                                    <span className="benefits-card_line_shorter column-15"></span>
                                </div>
                            </div>
                            <div className="benefits-desc column-70" data-aos="zoom-in">
                                <p className="section-title" data-aos="zoom-in">We provide a full fledge product development studio that caters to the services you need to move your product from an idea to the market.</p>
                            </div>
                        </div>
                        <div className="benefits-column d-flex jcsb">
                            <div className="benefits-card column-20" data-aos="zoom-in">
                                <h3 className="section-title text-bold text-medium line-height-small">No Geographical Barriers</h3>
                                <div className="benefits-card_line d-flex jcsb">
                                    <span className="benefits-card_line_longer column-70"></span>
                                    <span className="benefits-card_line_shorter column-15"></span>
                                </div>
                            </div>
                            <div className="benefits-desc column-70">
                                <p className="section-title" data-aos="zoom-in">We provide seamless and excellent services for international clients. We work so closely with you that you feel like we are in the same time zone.</p>
                            </div>
                        </div>
                        <div className="benefits-column d-flex jcsb">
                            <div className="benefits-card column-20" data-aos="zoom-in">
                                <h3 className="section-title text-bold text-medium line-height-small">Flexible Engagement Model</h3>
                                <div className="benefits-card_line d-flex jcsb">
                                    <span className="benefits-card_line_longer column-70"></span>
                                    <span className="benefits-card_line_shorter column-15"></span>
                                </div>
                            </div>
                            <div className="benefits-desc column-70">
                                <p className="section-title" data-aos="zoom-in">We derisk your investments in software development by providing flexible project engagement and payment model that suite your requirements.</p>
                            </div>
                        </div>
                        <div className="benefits-columns_image">
                            <img src={benefitsImage} alt="Benefits' Image" />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Benefits
