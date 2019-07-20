import React, { useState } from 'react'

import { FetchConsumer } from '../context/FetchContext';

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
                console.log(value);
              return (
            <form className="search">
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
                    )
                 }};
            </FetchConsumer>
        </React.Fragment>
    );
};

export default FormSearch;