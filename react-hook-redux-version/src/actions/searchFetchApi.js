import { FETCH_CUSTOMER } from './types';

// redux thunk 
// al usar redux thunk en nuestro action retorna una function como callback "dispatch" para luego hacer lo que quieras

// Redux necesita que tus actions creators sean puras para poder meter magia por abajo. Con thunk poder hacer que tu action creator devuelva una función y ahi podes hacer lo que quieras. Esa función recibe como parametro dispatch para que puedas dispatchear acciones en vez de retornar una sóla

//                                                      RETORNA FUNCTION
// otra forma: export const searchFetchApi = (search) = async(dispatch) => {} 

export const searchFetchApi = (search) => {
    return async function(dispatch) { 
    console.log('desde redux' + search);
   
    // realizo el fetch para obtener la api con el resultado
    const keyApi = `1e6296feeb7565b54f1f8ea079f7e70e`
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=es&query=${search}`;
 
    // async await
    const response = await fetch(apiUrl);
    const data = await response.json();
 
    //filtro el primer array para obtener la pelicula mas cercana que encontro
    const filterData = data.results[0];

	dispatch({ type: FETCH_CUSTOMER, payload: filterData})
    }
};