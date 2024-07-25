import React,{useState} from "react";
import "./Accordion.scss"
import ouvrir from "../../images/fleches/fleche-vers-le-haut.png";
import fermer from "../../images/fleches/fleche-vers-le-bas.png"

function Accordion({title, children, tailleAccordion}) {
    const [isOpen, setIsOpen] = useState(false);
    const openClose = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <div className={`${tailleAccordion==="grande" ? `big-accordion` : `small-accordion`}`}>
            <div className="head" onClick={openClose}>
                <h2>{title}</h2>
                <img className={`arrow ${isOpen ? 'rotate' : ''}`} src={ouvrir} alt="flèche" />
            </div>
            {isOpen && (
                <div className={`content ${isOpen ? 'show' : ''}`}>
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion;