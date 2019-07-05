import React, { useState } from 'react'
import FormSearch from './FormSearch';
const Results = React.lazy(() => import('./Results'));



const ContainerApp = () => {

    const [data, setData] = useState(false)

    let getDatosResults 

    getDatosResults = datos => {
        console.log(datos)
        setData(datos);
    }
    
    console.log(data)

    let ResultsData
    if (data === false ) {
        ResultsData = <div>Ingrese su busqueda</div>
    } else {
    ResultsData = 
    <React.Suspense fallback={'cargando'}>
    <Results data={data} /> 
    </React.Suspense>
    }

    return (
       <React.Fragment>
           <FormSearch getDatosResults={getDatosResults} />
           {ResultsData}
       </React.Fragment>
    );
};

export default ContainerApp;