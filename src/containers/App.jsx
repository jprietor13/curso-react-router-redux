import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const inicialState = useInitialState(API);
    return (
        <div className="App">
            <Header />
            <Search />
            {inicialState.mylist !== undefined && inicialState.mylist.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                    {inicialState.mylist.map((item) => {
                            return <CarouselItem key={item.id} {...item}/>
                        })
                    }
                    </Carousel>
                </Categories>
            )}
            
            <Categories title="Tendencias">
                <Carousel>
                    {inicialState.trends !== undefined &&
                        inicialState.trends.map((item) => {
                            return <CarouselItem key={item.id} {...item} />
                        })
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de platzi video">
                <Carousel>
                    {inicialState.originals !== undefined &&
                        inicialState.originals.map((item) => {
                            return <CarouselItem key={item.id} {...item}/>
                        })
                    }
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;