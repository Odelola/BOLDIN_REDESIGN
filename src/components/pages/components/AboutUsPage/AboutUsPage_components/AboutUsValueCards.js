import React from 'react'
import './AboutUsValueCards.css'

function AboutUsValueCards(props) {
    return (
        <div className="about_values_cards column-30">
            <div className="about_values_card d-flex x-center">
                <img src={props.image} alt={props.alt} />
            </div>
            <h3 className="about_values_card_text section-title text-primary text-bold text-medium">{props.cardText} <br /> {props.cardText2}</h3>
        </div>
    )
}

export default AboutUsValueCards
