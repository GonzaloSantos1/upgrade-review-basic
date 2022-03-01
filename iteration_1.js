//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
  {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
  {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
  {
    title: 'Solo en Whatsapp',
    duration: 223,
    categories: ['comedia', 'thriller'],
  },
  {
    title: 'El gato con guantes',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación'],
  },
];

// ------------ VERSION LARGA --------------

let moviesCategories = [];

function filterCategories(arr) {
  for (let values of arr) {
    let categories = values.categories;
    moviesCategories = moviesCategories.concat(categories);
    for (i = 0; i < moviesCategories.length; i++) {
      if (
        moviesCategories.indexOf(moviesCategories[i]) !==
        moviesCategories.lastIndexOf(moviesCategories[i])
      ) {
        moviesCategories.splice([i], 1);
      }
    }
  }
  return moviesCategories;
}

filterCategories(movies);
console.log(moviesCategories);

//-------------VERSION CORTA----------------

const movieCategories = [
  ...new Set([].concat(...movies.map((o) => o.categories))),
];
console.log(movieCategories);
