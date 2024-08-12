import React from 'react';
import './SectionSecondary.scss';


const SectionSecondary = ({ imageSrc, altText, title, description }) => {
    return (

        <section className="section-image-text">
            <img src={imageSrc} alt={altText} className="section-image" />
            <div className="section-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>

    );
};

export default SectionSecondary;
