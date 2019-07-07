import React, { useState } from 'react'
import Error from './Error';

const FormSearch = ({getDatosResults}) => {

    // Usando Hook
    // "search" es mi state
    // "setSearch" es la function donde voy a actualizar el state
    // "useState('')" useState modulo react para usar hook; adentro de parentesis es el inicio del estado osea un String vacio
    const [search, setSearch] = useState('');
    const [err, setErr] = useState(false);

    // nombres funciones
    let handleChange;
    let handleSubmit;

    handleChange = e => {
        // "e.target.value" con esto obtengo lo que escribo en el input  \\ console.log(e.target.value) \\
        //Actualizo el estado con setSearch pasandole lo que escribo en el \\ input e.target.value \\
        setSearch(e.target.value);
    }

    handleSubmit = async e => {
        e.preventDefault();
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

        // async await
        const response = await fetch(apiUrl);
        const data = await response.json();

        //filtro el primer array para obtener la pelicula mas cercana que encontro
        const filterData = data.results[0];

        if (filterData === undefined) {
            setErr('La pelicula no se encontro')
            return
            
        } else {

            //paso los datos del estado para obtenerlos en ContainerAPP
            getDatosResults(filterData)

            // Vuelvo al estado inicial 
            setErr(false)
        }

    }




    return (
       <React.Fragment>
            {err ? <Error err={err} /> : null  }
            <form className="search" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="search-input"
                        name='search'
                        placeholder="Escribe la pelicula"
                        onChange={handleChange}
                        value={search}
                        />
                        <button type="submit" className="estilo-boton">Buscar</button>
                    </form>
        </React.Fragment>
    );
};

export default FormSearch;