//en setFavorite se guarda ahi en favoritos la 
//info que se transmitira mediante payload

//type sera el nombre que identificaremos esta descripcion
// de lo que estamos haciendo
export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
});