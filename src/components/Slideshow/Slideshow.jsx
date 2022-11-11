import React, { useState } from 'react';

import './Slideshow.css';

export default function Slideshow(props) {
    const pictures = props.pictures;

    const [picturesIndex, setPicturesIndex] = useState(0);

    const onNext = () => {
        if (picturesIndex === props.pictures.length - 1) {
            setPicturesIndex(0);
        } else {
            setPicturesIndex(picturesIndex + 1);
        }
    };

    const OnPrevious = () => {
        if (picturesIndex === 0) {
            setPicturesIndex(props.pictures.length - 1);
        } else {
            setPicturesIndex(picturesIndex - 1);
        }
    };

    return (
        <div className='slideshow'>
            <div className='slideshow__picture-container'>
                {pictures.length > 0 ? (
                    <img
                        className='slideshow__picture'
                        src={pictures[picturesIndex]}
                        alt=''
                    />
                ) : (
                    <p className='slideshow__no-pictures'>
                        Aucune image disponible
                    </p>
                )}
            </div>

            {pictures.length > 1 ? (
                <>
                    <nav className='slideshow__nav'>
                        <img
                            className='slideshow__nav--left'
                            src='../images/chevron.svg'
                            alt=''
                            onClick={OnPrevious}
                        />
                        <img
                            className='slideshow__nav--right'
                            src='../images/chevron.svg'
                            alt=''
                            onClick={onNext}
                        />
                    </nav>
                    <div className='slideshow__counter'>
                        <span>
                            {picturesIndex + 1}/{pictures.length}
                        </span>
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
}
