import React from 'react';
import './Home.scss';
import SectionPrimary from '../../components/main/SectionPrimary/SectionPrimary'
import SectionSecondary from '../../components/main/SectionSecondary/SectionSecondary'


const Home = () => {

    return (
        <main>
            <SectionPrimary />           
            <SectionSecondary/>

        </main>
    );
};

export default Home;