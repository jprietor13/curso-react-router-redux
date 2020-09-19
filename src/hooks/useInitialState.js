import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => { //funcion anonima
        fetch(API)//recibe la api
        .then(response => {// la api resuelve y regresa un json como respuesta
            return response.json();
        })
        .then(data => {// la respuesta (data) que regresa el json, se pasa a la funcion(estado) setVideos
            return setVideos(data);
        });
    }, []);// se pasa siempre un segundo valor como un array vacio

    return videos;
}

export default useInitialState;

