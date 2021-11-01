const peliculas = [
    'Soy Leyenda',
    'Rey Feon',
    'La Marca del Demonio',
    'A Todo Pedo',
    'El Risas',
    'El Brujo',
    'Rey de la Montaña',
    'Soy el Rey del Mundo'
];

const filtraPeliculas = (laBusqueda) =>
    peliculas.filter((filtrado) =>
        filtrado.toLocaleLowerCase().includes(laBusqueda.toLocaleLowerCase()) == true);