import React from "react";
import "./About.css"
import image from "../../images/About.jpg"
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";
import datas from "../../datas/datas.json"

function About() {
    return(
        <div>
            <div className="about-banner">
                <Banner image = {image} overlay={false} />
            </div>
            <div className="about-accordion-container">
                {datas.map((data, index) => (
                    <Accordion key={index} title={data.head}  tailleAccordion="grande"> {data.text}</Accordion>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default About;