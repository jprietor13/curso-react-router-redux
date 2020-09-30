const reducer = (state, action) => {
    switch(action.type){
        case 'SET_FAVORITE'://manejamos el set favorite
            return {
                ...state,//se trae el state destructurado
                //elemento a actulizar
                myList: [...state.myList, action.payload]  //array con los elementos que contenga y objeto que guardara
            } 
        default: //si no coindice con ninguno de los casod, mandar el estado siempre como se encontro
            return state;
    }
}

export default reducer;