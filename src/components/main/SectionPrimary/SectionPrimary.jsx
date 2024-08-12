import React from 'react';
import './SectionPrimary.scss';

const SectionPrimary = ({ backgroundImage, children }) => {
  return (

    <section
      className="section-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </section>

  );
};

export default SectionPrimary;
