import React from 'react';

import './Banner.css';

export default function Banner(props) {
    return (
        <div className='banner'>
            <img
                src={props.imgSrc}
                alt={props.altText}
            />
            <h1>{props.title}</h1>
        </div>
    );
}
