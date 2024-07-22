import React from "react";
import './Card.css'

function Card({image, title}) {
    return(
        <div className="card-container">
            <img className="img-card" src={image} alt={title} />
            <h2 className="card-title" >{title}</h2>
        </div>
    )
}


export default Card;