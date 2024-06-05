import React, { useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            header.classList.toggle('shadow', window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="nav container">
                <a className="logo">Bakra<span>.live</span></a>
            </div>
        </header>
    );
};

export default Header;
