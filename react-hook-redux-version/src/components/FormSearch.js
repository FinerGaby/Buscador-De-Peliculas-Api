import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFetchApi } from './../actions/searchFetchApi';

const FormSearch = () => {

    const [search, setSearch] = useState('');

    let handleChange;
    let handleSubmit

    //dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    const fetchApi = (letras) => dispatch(searchFetchApi(letras))


    handleChange = e => {

        setSearch(e.target.value)

    }

    handleSubmit = e => {
        e.preventDefault();

        const letras = search;
     
        fetchApi(letras);
        
    }



    return (
            <React.Fragment>      
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