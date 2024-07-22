import React,{useState} from "react";
import "./Accordion.css"
import ouvrir from "../../images/fleches/fleche-vers-le-haut.png";
import fermer from "../../images/fleches/fleche-vers-le-bas.png"

function Accordion({title, children, tailleAccordion}) {
    const [isOpen, setIsOpen] = useState(false);
    const openClose = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <div className={`${tailleAccordion==="grande" ? `big-accordion` : `small-accordion`}`}>
            <div className="head">
                <h2>{title}</h2>
                <img className="arrow" 
                    src={isOpen ? ouvrir : fermer} 
                    alt={
                        isOpen ? "fleche vers le haut" 
                            : "fleche vers le bas"
                        } 
                    onClick={openClose}
                />
            </div>
            {isOpen && (
                <div className="content">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion;