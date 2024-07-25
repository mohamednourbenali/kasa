import React, {useState} from "react";
import "./Carrousel.scss";
import droite from "../../images/fleches/fleche-vers-la-droite.png";
import gauche from "../../images/fleches/fleche-vers-la-gauche.png";


function Carrousel({pictures}) {
    const[currentIndex, setCurrentIndex] = useState(0);
    const length = pictures.length;

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex +1);
    }
    const prevSlide = () => {
        setCurrentIndex (currentIndex=== 0 ? length - 1 : currentIndex -1)
    }
    return(
        <div className="carousel-container">
            {length > 1? 
            <>
                <img className="prev" src={gauche} alt="fleche vers la gautche" onClick={prevSlide}/>
                <img className="carousel-image" src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                <img className="next" src={droite} alt="fléche vers la droite" onClick={nextSlide}/>
                <div className="carousel-counter">
                    {currentIndex + 1}/{length}
                </div>
            </>
            :
            <>
                <img className="carousel-image" src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </>}
        </div>
    )
}

export default Carrousel;