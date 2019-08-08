import React, { useState } from 'react'

import { FetchConsumer } from '../context/FetchContext';
import Error from './Error';

const FormSearch = () => {

    const [search, setSearch] = useState('');

    let handleChange;

    handleChange = e => {

        setSearch(e.target.value)

    }


    return (
         <React.Fragment>
            <FetchConsumer>
            {(value) => {
              const {handleSubmit, err} = value
              return (
            <React.Fragment>      
            {err ? <Error err={err} /> : null  }
            <form className="search" onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(search)
                }}>
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
                    )
                 }}
            </FetchConsumer>
        </React.Fragment>
    );
};

export default FormSearch;