import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./Hotel.css"
import hotels from "../../datas/hotels.json"
import Carrousel from "../../components/Carrousel/Carrousel.js";
import etoile from "../../images/etoiles/etoile.png"
import etoileVide from "../../images/etoiles/etoile-vide.png"
import Accordion from "../../components/Accordion/Accordion.js"
import Footer from "../../components/Footer/Footer.js";

function Hotel() {
    const{hotelid} = useParams();
    const ficheHotel = hotels.find((hotel) => hotel.id === hotelid);
    const compteur = [1, 2, 3, 4, 5];
    if (!ficheHotel) {
        return  <Navigate replace to="/404" />
    }
    
    return(
        <div className="hotel-container">
            <div className="carousel-wrapper">
                <Carrousel pictures={ficheHotel.pictures} />
            </div>
            <div className="info-container">
                <div className="hotel-title">
                    <h1> {ficheHotel.title}</h1>
                    <p className="location">{ficheHotel.location}</p>
                    <div className="tags">
                        {ficheHotel.tags.map((tag,index) => (
                            <p className="tag" key={index}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="host-description">
                    <div className="host">
                        <p className="host-name">{ficheHotel.host.name}</p>
                        <img src={ficheHotel.host.picture} alt="host profile pictur" className="host-image"/>
                    </div>
                    <div className="rate">
                        {compteur.map((note, index) => 
                            ficheHotel.rating >= note ?
                                <img key={index} className="star" src={etoile} alt="etoile pleine"/>
                            :   
                                <img key={index} className="star" src={etoileVide} alt="etoile vide"/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <Accordion title="Description" tailleAccordion="petite" >{ficheHotel.description}</Accordion>
                <Accordion title="Èquipement">
                    <ul>{ficheHotel.equipments.map((element, index) => (<li key={index}>{element}</li>))}</ul>
                </Accordion>
            </div>
            <Footer />
        </div>
    )
}

export default Hotel;


