import React from 'react';
import { useSelector } from 'react-redux';
//import StarRanking from './StarRanking';

const Results = () => {

    const datos = useSelector((state) => state.data.data)
    const { poster_path, title, overview, vote_average, vote_count, release_date } = datos;
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;


    return (
                <React.Fragment>
                <div className="resultado-api"> 
           <div className="imagen-portada"><img src={image} alt={image}/></div>
               <div className="datos-api"><h2>{title}</h2>
               <div className="datos-api2"><h1>{overview}</h1>
                 <span>
       
                 Año: {release_date}<br />
                 Votos: {vote_count}<br />
                 </span>  
               </div>
               </div>
           </div>
                </React.Fragment>
    );
};

export default Results;