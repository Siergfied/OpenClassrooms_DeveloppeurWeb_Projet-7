import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';

//Pages
import Error from '../Error/Error';

import './Fiche-Logement.css';

export default function FicheLogement(props) {
    const [housing, setHousing] = useState({
        tags: [],
        equipments: [],
        pictures: [],
        rating: '',
        host: { name: '', picture: '' },
    });

    let { id } = useParams();

    const ratingScale = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetch('../data/logements.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHousing(data.find((x) => x.id === id));
            });
    }, [id]);

    if (housing === undefined) {
        return <Error />;
    } else {
        return (
            <main className='ficheLogement'>
                <Slideshow pictures={housing.pictures} />

                <div className='ficheLogement__container'>
                    <div className='ficheLogement__summary'>
                        <div>
                            <h1 className='ficheLogement__title'>
                                {housing.title}
                            </h1>
                            <h2 className='ficheLogement__location'>
                                {housing.location}
                            </h2>
                        </div>

                        <div className='ficheLogement__tag-container'>
                            {housing.tags.map((tag) => (
                                <span
                                    className='ficheLogement__tag'
                                    key={tag}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='ficheLogement__info'>
                        <div className='ficheLogement__host'>
                            <div className='ficheLogement__host--name'>
                                <p>
                                    {housing.host.name.split(' ').slice(0, -1)}
                                </p>
                                <p>{housing.host.name.split(' ').slice(-1)}</p>
                            </div>

                            <img
                                className='ficheLogement__host--picture'
                                src={housing.host.picture}
                                alt={housing.host.name}
                            />
                        </div>

                        <div className='ficheLogement__rating'>
                            {ratingScale.map((scale) =>
                                scale <= housing.rating ? (
                                    <img
                                        src='../images/rating_star_colored.svg'
                                        alt=''
                                        key={scale}
                                    />
                                ) : (
                                    <img
                                        src='../images/rating_star_blank.svg'
                                        alt=''
                                        key={scale}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className='ficheLogement__collapse-container'>
                    <div className='ficheLogement__collapse'>
                        <Collapse
                            title='Description'
                            textArray={[housing.description]}
                        />
                    </div>

                    <div className='ficheLogement__collapse'>
                        <Collapse
                            title='Équipements'
                            textArray={housing.equipments}
                        />
                    </div>
                </div>
            </main>
        );
    }
}
