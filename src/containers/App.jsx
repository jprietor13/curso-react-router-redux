import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss'

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => { //funcion anonima
        fetch(' http://localhost:3000/initalState')//recibe la api
        .then(response => {// la api resuelve y regresa un json como respuesta
            return response.json();
        })
        .then(data => {// la respuesta (data) que regresa el json, se pasa a la funcion(estado) setVideos
            return setVideos(data);
        });
    }, []);// se pasa siempre un segundo valor como un array vacio

    console.log(videos);
    
    return (
        <div className="App">
            <Header />
            <Search />

            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title="Tendencias">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title="Originales de platzi video">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;