import React from 'react';
import { useState, useEffect } from 'react';

import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';

export default function Home() {
    const [housing, setHousing] = useState([]);

    useEffect(() => {
        fetch('../data/logements.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHousing(data);
            });
    }, []);

    return (
        <main className='home'>
            <Banner
                imgSrc='../images/banner_landscape_coast.jpg'
                altText='A coast landscape'
                title='Chez vous, partout et ailleurs'
            />
            <Gallery housing={housing} />
        </main>
    );
}
