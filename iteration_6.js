// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

let jugadores = [
  'Mesirve',
  'Cristiano Romualdo',
  'Fernando Muralla',
  'Ronalguiño',
];

let swap = (arr, param1, param2) => {
  let savedIndex = arr.indexOf(param1);
  let savedIndex1 = param2;
  arr[arr.indexOf(param2)] = param1;
  arr[savedIndex] = savedIndex1;
};

swap(jugadores, 'Fernando Muralla', 'Mesirve');
console.log(jugadores);
