import React from 'react';
import '../styles/Home.css';
import goatImage from '../images/logo.webp'; // Adjust the path as necessary

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-text container">
                <img src={goatImage} alt="Goat" className="home-image" />
            </div>
            <h3 className="home-subtitle">Celebrate your Eid-ul-Adha!!</h3>

        </section>
    );
};

export default Home;
