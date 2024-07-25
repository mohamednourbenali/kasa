import React from "react";
import {Link} from 'react-router-dom';
import hotels from "../../datas/hotels.json";
import Card from "../Card/Card.js";
import "./HotelDisplay.scss"

function HotelDisplay() {
    return(
        <div className="hotel-cards-container">
            {hotels.map((hotel,index) => {
                return (
                    <Link to={`/Hotel/${hotel.id}`} key={index}>
                        <Card image={hotel.cover} title={hotel.title} />
                    </Link>
                )
            })}
        </div>
    )
}

export default HotelDisplay