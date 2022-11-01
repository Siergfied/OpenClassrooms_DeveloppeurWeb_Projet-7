import React from 'react';
import { Link } from 'react-router-dom';

import './Thumb.css';

export default function Thumb(props) {
    return (
        <Link
            className='thumb-container'
            to={'/location/' + props.id}
            onClick={() => window.scrollTo(0, 0)}
        >
            <article className='thumb'>
                <img
                    className='thumb__image'
                    src={props.image}
                    alt={props.location}
                />
                <h2 className='thumb__title'>{props.title}</h2>
            </article>
        </Link>
    );
}
