import React from 'react';
import '../assets/styles/containers/NotFound.scss'

const NotFound = () => {
    return(
        <React.Fragment>
            <section className="error-container">
                <span>4</span>
                <span>
                    <span className="screen-reader-text">0</span>
                </span>
                <span>4</span>
            </section>
            <h1 className="message-not-found">Ups!! el sitio requerido no se encuentra</h1>
            <div className="link-container">
                <a target="_blank" href="" className="more-link">Regresar</a>
            </div>
        </React.Fragment>    
    );
}

export default NotFound;