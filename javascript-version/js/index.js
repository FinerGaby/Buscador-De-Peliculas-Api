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
            background: url(https://image.tmdb.org/t/p/w500${filtradoSearch.poster_path});
        }
        </style>
        <div class="resultado-api">
            <div class="imagen-portada"><img src="https://image.tmdb.org/t/p/w500${filtradoSearch.poster_path}" /></div>
            <div class="datos-api"><h2>${filtradoSearch.title}</h2>
            <div class="datos-api2"><h1>${filtradoSearch.overview}</h1>
                  <span>
                  Estrellas: ${filtradoSearch.vote_average}<br />
                  Año: ${filtradoSearch.release_date}<br />
                  Votos: ${filtradoSearch.vote_count}<br />
                  </span>
            </div>
            </div>
        </div>
        `;

        }

    // prueba de otro fetch
    console.log(`test ${filtradoSearch.id}`)
    })
    .catch(error => console.error(error));

};