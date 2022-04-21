import React from 'react'
import './TeamsCards.css'

function TeamsCards(props) {
    return (
            <div className="teams-card"  data-aos="zoom-in">
                <img src={props.image} alt={props.alt} className="teams_image" />
                <h3 className="teams_name">{props.name} <br /> {props.othername}</h3>
                <p className="teams-role">{props.role}</p>
            </div>
    )
}

export default TeamsCards
