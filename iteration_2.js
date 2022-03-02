// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: 'Manolo el del bombo',
    favoritesSounds: {
      waves: {format: 'mp3', volume: 50},
      rain: {format: 'ogg', volume: 60},
      firecamp: {format: 'mp3', volume: 80},
    },
  },
  {
    name: 'Mortadelo',
    favoritesSounds: {
      waves: {format: 'mp3', volume: 30},
      shower: {format: 'ogg', volume: 55},
      train: {format: 'mp3', volume: 60},
    },
  },
  {
    name: 'Super Lopez',
    favoritesSounds: {
      shower: {format: 'mp3', volume: 50},
      train: {format: 'ogg', volume: 60},
      firecamp: {format: 'mp3', volume: 80},
    },
  },
  {
    name: 'El culebra',
    favoritesSounds: {
      waves: {format: 'mp3', volume: 67},
      wind: {format: 'ogg', volume: 35},
      firecamp: {format: 'mp3', volume: 60},
    },
  },
];

let sum = 0;     // Creamos una variable que recoja la suma de los valores de todos los volúmenes
let count = 0;  // Creamos una variable que contabilice el número de volúmenes

for (let sounds of users) {      // Recorremos todos los objetos dentro del array
  for (let soundsList in sounds.favoritesSounds) {      // Recorremos sólo los objetos dentro de 'favoritesSounds'
    sum += sounds.favoritesSounds[soundsList].volume;   // Sumamos cada uno de los valores de los volúmenes
    count++;    // Sumamos 1 al contador
  }
}

console.log(sum / count);
