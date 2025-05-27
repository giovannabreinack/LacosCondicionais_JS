const leia = require('readline-sync');

let numero;

numero = leia.questionInt("Digite o numero: ");

if (numero >= 0 && numero % 2 == 0){
    console.log("O numero eh par e positivo");
} else if (numero < 0 && numero % 2 == 0){
    console.log("O numero eh par e negativo");
} else if (numero > 0 && numero % 2 !== 0){
    console.log("O numero eh impar e positivo");
} else{
    console.log("O numero eh impar e negativo");
}