// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.

let rollDice = (sides) => {
  console.log(Math.floor(Math.random() * sides + 1));
};

rollDice(20);

// Usamos Math.random(min, max) multiplicado por el número de caras que queremos que tenga el dado y le sumamos 1, para que min(incluido) nunca sea 0, y max(excluido) esté incluido.

// Usamos Math.floor para obtener un número entero.
