import React from 'react';
import FormSearch from './FormSearch';
import Results from './Results';

import FetchProvider from '../context/FetchContext';

const ContainerApp = () => {


    return (
        <FetchProvider>
            <FormSearch />
            <Results />
        </FetchProvider>
    );
};

export default ContainerApp;