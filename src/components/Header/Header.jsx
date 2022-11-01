import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

import logo from '../../images/logo.svg';

export default function Header() {
    let activeStyle = {
        textDecoration: 'underline',
    };

    return (
        <header className='header'>
            <Link to='/'>
                <img
                    className='header-logo'
                    src={logo}
                    alt='Kasa'
                />
            </Link>

            <nav className='header-nav'>
                <ul>
                    <li>
                        <NavLink
                            className='header-link'
                            to='/'
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            end
                        >
                            Accueil
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className='header-link'
                            to='/a-propos'
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
