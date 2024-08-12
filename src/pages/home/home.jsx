import React from 'react';
import './Home.scss';
import SectionSecondary from '../../components/main/SectionSecondary/SectionSecondary';
import SectionPrimary from '../../components/main/SectionPrimary/SectionPrimary';

const Home = () => {

    return (
        <>

            <main>
                
                    <SectionPrimary />
                    <SectionSecondary />
                
            </main>
        </>
    );
};

export default Home;