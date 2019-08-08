import React from 'react';
import FormSearch from './FormSearch';
import Results from './Results';
import Header from './Header';


import FetchProvider from '../context/FetchContext';

const ContainerApp = () => {


    return (
          <section className="container">
            <FetchProvider>
            <Header />
            <FormSearch />
            <Results />
        </FetchProvider> 
       </section>
    );
};

export default ContainerApp;