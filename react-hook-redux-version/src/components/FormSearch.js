import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { searchFetchApi } from './../actions/searchFetchApi';
import Error from './Error';

const FormSearch = () => {

    const [search, setSearch] = useState('');

    let handleChange;
    let handleSubmit

    //dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    const fetchApi = (search) => dispatch(searchFetchApi(search))

    // accedo al estado de error
    const err = useSelector((state) => state.data.err)


    handleChange = e => {

        setSearch(e.target.value)

    }

    handleSubmit = e => {
        e.preventDefault();

        // ejecuto el action mandado el value del form
        fetchApi(search);
        
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