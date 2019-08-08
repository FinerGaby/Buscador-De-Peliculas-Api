import React, { useState } from 'react'

const FetchContext = React.createContext();
export const FetchConsumer = FetchContext.Consumer;

const FetchProvider = (props) => {

    const [data, setData] = useState(false)
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false)

    let handleSubmit;

    handleSubmit = async (search) => {
        //console.log('desde handlesubmit' + search);

        // validar que todos los campos esten llenos si no la pelicula no se encontro
        if(search === '' ) {
          setErr('Error usted no escribio nada')
           
           // detener la ejecución
           return;
        }
       
       // realizo el fetch para obtener la api con el resultado
       const keyApi = `1e6296feeb7565b54f1f8ea079f7e70e`
       const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=es&query=${search}`;

       //preparando el loading
       setLoading(true)

       // async await
       const response = await fetch(apiUrl);
       const data = await response.json();

       //filtro el primer array para obtener la pelicula mas cercana que encontro
       const filterData = data.results[0];

       if (filterData === undefined) {
           setLoading(false)
           setErr('La pelicula no se encontro')
           return
           
       } else {

          //spinner loading 
          setLoading(false)

          //obtengo los datos de filterdata
           setData(filterData)

           // Vuelvo al estado inicial 
           setErr(false)
       }

    }

    return (

      <FetchContext.Provider
        value={{
            data: data,
            handleSubmit: handleSubmit,
            err: err,
            loading: loading
        }}
      >
       {props.children}
      </FetchContext.Provider>
    );
};

export default FetchProvider;