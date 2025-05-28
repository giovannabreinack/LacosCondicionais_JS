const leia = require('readline-sync');

let numero1, numero2;
let codigoOperacao;

console.log("------------Calculadora-----------");
numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");
codigoOperacao = leia.questionInt("Operacoes: " + "\n" + "1 - Soma" + "\n" + "2 - Subtracao" + "\n"
     + "3 - Multiplicacao" + "\n" + "4 - Divisao" + "\n" + "Digite: " );

switch(codigoOperacao){
        case 1:
            console.log(numero1 + numero2);
            break;
        case 2:
            console.log(numero1 - numero2);
            break;
        case 3:
            console.log(numero1 * numero2);
            break;
        case 4:
            console.log(numero1 / numero2);
            break;
        default:
            console.log("Codigo invalido");
            break;
}

