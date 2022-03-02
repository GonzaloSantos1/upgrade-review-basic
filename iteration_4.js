// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
  array.forEach((o) => {
    if (text == o) {
      console.log('La posición de ' + text + ' es ' + array.indexOf(o));
    }
  });
}

findArrayIndex(array, 'Caracol');
findArrayIndex(array, 'Mosquito');
findArrayIndex(array, 'Salamandra');
findArrayIndex(array, 'Ajolote');
