import React from "react";
import {Link} from 'react-router-dom';
import "./Error.scss";
import Footer from "../../components/Footer/Footer.js"

function Error() {
    return(
        <div>
            <div className="error-page">
                <h1 className="error">404</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="link-home" to='/'>Retour à la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error