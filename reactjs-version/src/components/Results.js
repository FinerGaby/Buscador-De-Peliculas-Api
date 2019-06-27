import React from 'react';

const Results = ({dataResults, hideText}) => {

    const { poster_path, title, overview, vote_average, vote_count, release_date } = dataResults;
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
       <div className="resultado-api"> 
           
                {hideText ? 
                <React.Fragment>
                <div class="imagen-portada"><img src={image} alt={image}/></div>
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
                       :   'ingrese su busqueda'}
            </div>
    );
};

export default Results;