import React from 'react';

import './Footer.css';

import logo_white from '../../images/logo_white.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <img
                className='footer-logo'
                src={logo_white}
                alt='Kasa'
            />
            <p className='footer-text'>
                &copy; 2020 Kasa. Tous droits réservés
            </p>
        </footer>
    );
}
