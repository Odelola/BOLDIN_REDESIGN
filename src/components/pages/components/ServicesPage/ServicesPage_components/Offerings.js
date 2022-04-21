import React, {useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Offerings.css'

function Offerings() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="offerings" className="offerings default-padding-2">
        <h3 className="section-title text-bold text-medium text-primary">Our offerings</h3>
        <div className="offerings-inner">
            <div className="offerings-column d-flex jcsb">
                <div className="offerings-column_title">
                    <h3 className="text-bold text-primary-gradient" data-aos="fade-right">Product<br /> Discovery</h3>
                </div>
                <div className="offerings-column_desc column-75">
                    <h3 className="text-gray section-title">We help clients think through and firm up their ideas. To achieve this we do the following:</h3>
                    <ul className="offerings-column_lists">
                        <li className="d-flex y-center"><span></span>User research and analysis</li>
                        <li className="d-flex y-center"><span></span>Prototyping</li>
                        <li className="d-flex y-center"><span></span>Product Startegy development</li>
                        <li className="d-flex y-center"><span></span>Design Sprints</li>
                        <li className="d-flex y-center"><span></span>Cost estimation</li>
                    </ul>
                </div>
            </div>
            <div className="offerings-column d-flex jcsb">
                <div className="offerings-column_title">
                    <h3 className="text-bold text-primary-gradient" data-aos="fade-right">Product<br /> Development</h3>
                </div>
                <div className="offerings-column_desc column-75">
                    <h3 className="text-gray section-title">We leverage open source and proprietary technology to develop and deploy reliable, secure, efficient and scalable applications.</h3>
                    <ul className="offerings-column_lists">
                        <li className="d-flex y-center"><span></span>Web applications</li>
                        <li className="d-flex y-center"><span></span>Mobile applications</li>
                        <li className="d-flex y-center"><span></span>Enterprise applications</li>
                        <li className="d-flex y-center"><span></span>Software testing</li>
                    </ul>
                </div>
            </div>
            <div className="offerings-column d-flex jcsb">
                <div className="offerings-column_title">
                    <h3 className="text-bold text-primary-gradient" data-aos="fade-right">Emerging<br /> Technologies</h3>
                </div>
                <div className="offerings-column_desc column-75">
                    <h3 className="text-gray section-title">We harness emerging technologies to solve unique problems that is beyond the reach of conventional tech. Emerging technologies like:</h3>
                    <ul className="offerings-column_lists">
                        <li className="d-flex y-center"><span></span>Blockchain</li>
                        <li className="d-flex y-center"><span></span>Artificial Intelligence</li>
                        <li className="d-flex y-center"><span></span>Internet of things</li>
                        <li className="d-flex y-center"><span></span>Augmented and Virtual reality</li>
                    </ul>
                </div>
            </div>  
            <div className="offerings-column d-flex jcsb">
                <div className="offerings-column_title">
                    <h3 className="text-bold text-primary-gradient" data-aos="fade-right">Digital <br /> Transformation <br /> Consulting </h3>
                </div>
                <div className="offerings-column_desc column-75">
                    <h3 className="text-gray section-title">We help businesses optimize their business processes with technology. Carefully identifying the gaps and deploying technology backed tools to bridge them.</h3>
                </div>
            </div>
            <div className="engagement-model text-center text-white">
                <h3 className="section-title-white">Engagement Model</h3>
                    <p className="">Our founders set out to build a product studio that will cater to the growing needs of software products among startuppers, small, and large enterprises. Alongside building products as a service, the company was also tasked to spot problems they can solve and build proprietary solutions to solve them. </p>
                    <p className="">We are keeping the light of the vision that birthed Boldin and pursuing the mission without respite.</p>
            </div>
        </div>
    </section>
    )
}

export default Offerings;
