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
                    className='header__logo'
                    src={logo}
                    alt='Kasa'
                />
            </Link>

            <nav className='header__nav'>
                <ul>
                    <li>
                        <NavLink
                            className='header__link'
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
                            className='header__link'
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
