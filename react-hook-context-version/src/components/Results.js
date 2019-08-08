import React from 'react';

import { FetchConsumer } from '../context/FetchContext';
import StarRanking from './StarRanking';

const Results = () => {

    return (
        <FetchConsumer>
            {(value) => { 

            //accedo a state del context 
            const data = value.data
            const loading = value.loading
            
            //accedo al state del context recibiendo los datos
            const { poster_path, title, overview, vote_average, vote_count, release_date } = value.data;
            const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

            let ResultData
            if ( !data && !loading ) {
                ResultData = <React.Fragment>Ingrese su busqueda   <i className="fas fa-circle-notch fa-spin"></i></React.Fragment>
            } else {
                if ( loading ) {
            //console.log('esta cargando')
            ResultData =  <React.Fragment><i className="fas fa-spinner fa-2x fa-spin"></i></React.Fragment>
        } else {
            //console.log('tengo los datos los muestro')
            ResultData =
            <div className="resultado-api"> 
           <div className="imagen-portada"><img src={image} alt={image}/></div>
               <div className="datos-api"><h2>{title}</h2>
               <div className="datos-api2"><h1>{overview}</h1>
                 <span>
                 Estrellas: <StarRanking ranking={vote_average} /> <br />
                 Año: {release_date}<br />
                 Votos: {vote_count}<br />
                 </span>  
               </div>
               </div>
           </div>
            }}

            return (
                <React.Fragment>
                {ResultData}
                </React.Fragment>
            )}}
        </FetchConsumer>

    );
};

export default Results;