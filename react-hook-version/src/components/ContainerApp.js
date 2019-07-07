import React, { useState } from 'react'
import FormSearch from './FormSearch';
import Header from './Header';
const Results = React.lazy(() => import('./Results'));



const ContainerApp = () => {

    const [data, setData] = useState(false)

    let getDatosResults 

    getDatosResults = datos => {
        setData(datos);
    }    

    let ResultsData
    if (data === false ) {
        ResultsData = <div>Ingrese su busqueda   <i class="fas fa-circle-notch fa-spin"></i></div>
    } else {
    ResultsData = 
    <div>
    <React.Suspense fallback={'<i class="fas fa-spinner fa-spin"></i>'}>
    <Results data={data} /> 
    </React.Suspense>
    </div>
    }

    return (
        <section className="container">
            <Header />
            <FormSearch getDatosResults={getDatosResults} />
            {ResultsData}     
       </section>
    );
};

export default ContainerApp;