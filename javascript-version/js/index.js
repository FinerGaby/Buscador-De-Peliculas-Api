// Javascript search API
// Inicio con un texto por default
const inicio = document.getElementById('renderizado-datos').innerHTML = `Inserte su busqueda en el buscador`

// Function OnClick
function getApiSearch() {

    //Obtengo el value del search input
    const valuesInput = document.getElementById('search-input').value;

    // URL de la API
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${valuesInput}`;

    // Method
    const miInit = { method: 'GET'};

    // Realizo el Fetch para obtener datos    
    fetch(apiUrl, miInit)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        // Obtengo data un array de las peliculas mas cercanas que encontro; filtro el primer array [0]
        let filtradoSearch = data.results[0]
        //console.log(filtradoSearch);

        // Valido si me viene undefinend si la pelicula no se encontro
        if ( filtradoSearch === undefined ) {

            document.getElementById("renderizado-datos")
            .innerHTML = `La pelicula no se encontro`;

        // Si encontro la pelicula renderizo datos
        } else {
            // destructuring
            const { poster_path, title, overview, vote_average, vote_count, release_date } = filtradoSearch;

            document.getElementById("renderizado-datos")
            .innerHTML = `
            <style>
            body::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                filter: opacity(.1) grayscale(100%) contrast(130%);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background: url(https://image.tmdb.org/t/p/w500${poster_path});
            }
            </style>
            <div class="resultado-api">
                <div class="imagen-portada"><img src="https://image.tmdb.org/t/p/w500${poster_path}" /></div>
                <div class="datos-api"><h2>${title}</h2>
                <div class="datos-api2"><h1>${overview}</h1>
                      <span>
                      <div id="estrellas"></div>
                      Estrellas: ${vote_average}<br />
                      Año: ${release_date}<br />
                      Votos: ${vote_count}<br />
                      </span>
                </div>
                </div>
            </div>
            `;

        }

    // function para crear estrellas
    function starRanking() {
        // redondear el numero que me llega
        const star = Math.round(`${filtradoSearch.vote_average}`)
        var text = "";
        
        // loop
        for (i = 0; i < star; i++) {
            text += `<i class="fas fa-star"></i>`;
         }
        document.getElementById("estrellas").innerHTML = text;
    }
    starRanking();

    // prueba de otro fetch
    console.log(`test ${filtradoSearch.id}`)
    })
    .catch(error => console.error(error));

};
