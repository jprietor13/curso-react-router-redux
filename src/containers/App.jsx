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
    console.log(videos)

    return (
        <div className="App">
            <Header />
            <Search />
            {videos.mylist !== undefined && videos.mylist.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            )}
            
            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends !== undefined &&
                        videos.trends.map((item) => {
                            return <CarouselItem key={item.id} {...item} />
                        })
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de platzi video">
                <Carousel>
                    {videos.originals !== undefined &&
                        videos.originals.map((item) => {
                            return <CarouselItem key={item.key} {...item}/>
                        })
                    }
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;