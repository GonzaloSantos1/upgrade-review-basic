//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

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

//--------- CUENTA DE LA VIEJA ---------

let counter = [];

function soundCounter(arr) {
  let wavesCount = 0;
  let windCount = 0;
  let firecampCount = 0;
  let rainCount = 0;
  let trainCount = 0;
  let showerCount = 0;
  for (let sounds of users) {
    for (let favorites in sounds.favoritesSounds) {
      if (favorites == 'waves') {
        wavesCount++;
      } else if (favorites == 'wind') {
        windCount++;
      } else if (favorites == 'firecamp') {
        firecampCount++;
      } else if (favorites == 'rain') {
        rainCount++;
      } else if (favorites == 'train') {
        trainCount++;
      } else if (favorites == 'shower') {
        showerCount++;
      }
    }
  }
  counter.push({
    waves: wavesCount,
    wind: windCount,
    firecamp: firecampCount,
    rain: rainCount,
    train: trainCount,
    shower: showerCount,
  });
}

soundCounter(users);
console.log(counter);

//------------- SHORT VERSION  ------------

let count = {};
let arr = [];

for (let list of users) {
  for (let musicSounds in list.favoritesSounds) {
    arr.push(musicSounds);
  }
}
arr.forEach((o) => {
  count[o] = (count[o] || 0) + 1;
});

console.log(count);
