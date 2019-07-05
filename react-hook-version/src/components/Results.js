import React from 'react';

const Results = ({data}) => {

   
    const { poster_path, title, overview, vote_average, vote_count, release_date } = data;
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
       <div className="resultado-api"> 
           
                <React.Fragment>
                   
                <div className="imagen-portada"><img src={image} alt={image}/></div>
                    <div className="datos-api"><h2>{title}</h2>
                    <div className="datos-api2"><h1>{overview}</h1>
                      <span>
                      Estrellas: {vote_average}<br />
                      Año: {release_date}<br />
                      Votos: {vote_count}<br />
                      </span>  
                    </div>
                    </div>
                </React.Fragment>
            </div>
);
};

export default Results;