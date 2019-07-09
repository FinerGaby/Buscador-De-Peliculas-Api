import React, { useState } from 'react'
import FormSearch from './FormSearch';
import Header from './Header';
import Results from './Results';


const ContainerApp = () => {

    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(false)
    
    let getDatosResults 
    
    getDatosResults = datos => {
    
        //cuando recibo los datos paso mi loading a true para que se vaya el texto de "ingrese busqueda"
        setLoading(true);

        //los datos para que llegen al estado se espera 3 seg mientras entonces el estado queda en false que mostrara un "cargando"
        //cuando pasen los 3 seg el estado cambia y muestra los datos en el componente <Results />
        // si la pelicula no se encontro o viene undefinend las validaciones se encuentran en el FormSearch
        setTimeout(function(){ setData(datos) }, 3000)

        //Si loading quedo en true entonces el setData vuelve a false para que reinicie devuelta el "cargando"
        if ( loading === true ) {
            setData(false);
        }
    
    }    
        
    let ResultsData
    if (loading === false ) {
        ResultsData =  <React.Fragment>Ingrese su busqueda   <i className="fas fa-circle-notch fa-spin"></i></React.Fragment>
    } else {
        if (data === false) {
            //console.log('esta cargando')
            ResultsData =  <React.Fragment><i className="fas fa-spinner fa-2x fa-spin"></i></React.Fragment>
        } else {
    ResultsData = 
    <React.Fragment>
    <Results data={data} /> 
    </React.Fragment>
        }
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