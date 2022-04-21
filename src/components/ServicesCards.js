import React from 'react'
import './ServicesCards.css'


function ServicesCards(props) {
    return (
            <div className="services-card swiper-slide d-flex flex-column" data-aos="zoom-in-up" data-aos-duration="1000">
                <img src={props.image} className="services-card_image" alt="Service's Image" />
                <h4 className="services-card_text text-medium text-bold" data-aos="fade-right" data-aos-duration="500">{props.text} <br /> {props.text2}</h4>
            </div>
    )
}

export default ServicesCards;
