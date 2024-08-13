import React from 'react';
import './SectionSecondary.scss';
import Imagen2 from '../../../assets/images/desktop/image-interactive.jpg'
import ImagenMobile from  '../../../assets/images/mobile/image-interactive.jpg'

const SectionSecondary = () => {
    return (

        <section className="section-image-text">
           
            <picture>                      
                <source media="(min-width: 768px)" srcset={Imagen2} />
                <img className="section-image" src={ImagenMobile} alt="INTERACTIVE" />
            </picture>
            <div className="section-text">
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipiscing elit,  tortor imperdiet tempor vestibulum convallis cursus curabitur scelerisque,
                    dis fringilla augue risus senectus non
                </p>
            </div>

        </section >

    );
};

export default SectionSecondary;
