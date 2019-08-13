import React from 'react';
import { useSelector } from 'react-redux';
//import StarRanking from './StarRanking';

const Results = () => {

    const data = useSelector((state) => state.data.data)
    const loading = useSelector((state) => state.data.loading)

    const { poster_path, title, overview, vote_average, vote_count, release_date } = data;
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

    let ResultData
    if ( !data && !loading ) {
        ResultData = <React.Fragment>Ingrese su busqueda   <i className="fas fa-circle-notch fa-spin"></i></React.Fragment>
    } else {
        if ( loading ) {
    console.log('esta cargando')
    ResultData =  <React.Fragment><i className="fas fa-spinner fa-2x fa-spin"></i></React.Fragment>
} else {
    console.log('tengo los datos los muestro')
    ResultData =
    <div className="resultado-api"> 
   <div className="imagen-portada"><img src={image} alt={image}/></div>
       <div className="datos-api"><h2>{title}</h2>
       <div className="datos-api2"><h1>{overview}</h1>
         <span>
         Estrellas:  <br />
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
    );
};

export default Results;