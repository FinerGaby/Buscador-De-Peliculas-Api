import { FETCH_CUSTOMER } from './types';


export const searchFetchApi = async(search) => {

    console.log('desde redux' + search);
   
    // realizo el fetch para obtener la api con el resultado
    const keyApi = `1e6296feeb7565b54f1f8ea079f7e70e`
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=es&query=${search}`;
 
    // async await
    const response = await fetch(apiUrl);
    const data = await response.json();
 
    //filtro el primer array para obtener la pelicula mas cercana que encontro
    const filterData = data.results[0];

return { 
    type: FETCH_CUSTOMER, payload: filterData }
};