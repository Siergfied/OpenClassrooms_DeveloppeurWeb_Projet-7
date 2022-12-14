import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

//Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/Fiche-Logement/Fiche-Logement';
import Error from './pages/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <div className='wrapper'>
                    <Header />
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={<Home />}
                        />

                        <Route
                            exact
                            path='/a-propos'
                            element={<About />}
                        />

                        <Route
                            exact
                            path='/location/:id'
                            element={<FicheLogement />}
                        />

                        <Route
                            path='*'
                            element={<Error />}
                        />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    );
}

App();
