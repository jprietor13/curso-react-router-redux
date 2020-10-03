const reducer = (state, action) => {
    switch(action.type){
        case 'SET_FAVORITE'://manejamos el set favorite
            const exists = state.myList.find((item) => {
                return item.id === action.payload.id;
            })
            if(exists){
                return{...state}
            }
            return {
                ...state,//se trae el state destructurado
                //elemento a actulizar
                myList: [...state.myList, action.payload]  //array con los elementos que contenga y objeto que guardara
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                //usamos find para buscar el id dentro del state que concida con el que se esta enviando
                //si no esta en trends, pasa a find y sino, envia un array vacio.
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.originals.find(item => item.id === Number(action.payload))
                || []
            }   
            
        default: //si no coindice con ninguno de los casod, mandar el estado siempre como se encontro
            return state;
    }
}

export default reducer;