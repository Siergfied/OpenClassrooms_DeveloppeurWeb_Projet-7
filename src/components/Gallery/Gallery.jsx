import React from 'react';

import './Gallery.css';

import Thumb from '../Thumb/Thumb';

export default function Gallery(props) {
    return (
        <div className='gallery'>
            <ul>
                {props.housing.map(({ id, cover, location, title }) => (
                    <li key={id}>
                        <Thumb
                            id={id}
                            image={cover}
                            location={location}
                            title={title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
