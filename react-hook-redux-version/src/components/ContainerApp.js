import React from 'react';
import FormSearch from './FormSearch';
import Results from './Results';
import Header from './Header';

const ContainerApp = () => {


    return (
          <section className="container">
            <Header />
            <FormSearch />
            <Results />
       </section>
    );
};

export default ContainerApp;