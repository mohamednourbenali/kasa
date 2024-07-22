import React from "react";
import "./Banner.css"

function Banner({image, texte, overlay}) {
    return (
        <div className="banner-container">
            {overlay && <div className="overlay"></div>}
            <img className='banner' src={image} alt="montagne" />
            {overlay && <h1 className="banner-title">{texte}</h1>}
        </div>
    )
}

export default Banner;