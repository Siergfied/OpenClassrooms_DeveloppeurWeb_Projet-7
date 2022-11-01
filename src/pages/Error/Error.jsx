import React from 'react';
import { Link } from 'react-router-dom';

import './Error.css';

export default function Error() {
    return (
        <main className='error'>
            <p className='error__code'>404</p>

            <p className='error__text'>
                Oups! La page que vous demandez n'existe pas.
            </p>

            <Link
                className='error__home-link'
                to='/'
            >
                Retourner sur la page d'acceuil
            </Link>
        </main>
    );
}
