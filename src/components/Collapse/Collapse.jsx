import React, { useState } from 'react';

import './Collapse.css';

export default function Collapse(props) {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='dropdown'>
            <h2
                className='dropdown__title'
                onClick={() => setDropdown(!dropdown)}
            >
                <span>{props.title}</span>
                <span
                    className={`dropdown__icon ${dropdown ? 'open' : 'close'}`}
                >
                    <img
                        src='../images/chevron.svg'
                        alt=''
                    ></img>
                </span>
            </h2>

            <ul className={`dropdown__text ${dropdown ? 'open' : 'close'}`}>
                {props.textArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
