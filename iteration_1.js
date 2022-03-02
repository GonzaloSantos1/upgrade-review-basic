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

//-------------VERSION CORTA----------------


// 1. Creamos un nuevo array Set vacio, el cual no permite valores repetidos y los elimina automáticamente.
// 2. Extraemos los elementos 'categorias' a través de movies.map() y los concatenamos en el array creado.
// En cuanto introduzcamos valores repetidos a través de .concat(), Set los elimina automáticamente.

const movieCategories = [
  ...new Set([].concat(...movies.map((o) => o.categories))),
];
console.log(movieCategories);



// ------------ VERSION LARGA --------------

let moviesCategories = [];

function filterCategories(arr) {
  for (let values of arr) {      // Recorremos todos los objetos del array y buscamos 'categorias'
    moviesCategories = moviesCategories.concat(values.categories); // Concatenamos cada elemento en nuestro array vacio 'moviesCategories = []'
    for (i = 0; i < moviesCategories.length; i++) { // Hacemos un loop dentro de nuestro nuevo array ya concatenado
      if (
        moviesCategories.indexOf(moviesCategories[i]) !==
        moviesCategories.lastIndexOf(moviesCategories[i])    // Si el indexOf un elemento NO coincide con su lastIndexOf, quiere decir que está repetido
      ) {
        moviesCategories.splice([i], 1);    // Si se cumple la condición, lo eliminamos
      }
    }
  }
  return moviesCategories;  // Devolvemos el valor al array
}

filterCategories(movies);  // Llamamos a la función
console.log(moviesCategories);


