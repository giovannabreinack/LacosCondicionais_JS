const leia = require('readline-sync');

let codigoOperacao;

const saldo = 1000.00;
let valor;

console.log("------------Conta bancária----------------")
codigoOperacao = leia.questionInt("1 - Saldo" + "\n" + "2 - Saque" + "\n" + "3 - Deposito" + "\n" + "Digite: ");
console.log("------------------------------------------");


switch(codigoOperacao){
    case 1:
        console.log("Operação - Saldo" + "\n" + (saldo));
        break;
    case 2:
        console.log("Operação - Saque" + "\n");
        valor = leia.questionFloat("Digite o valor: ");
        if (saldo >= valor){
            console.log("Saque autorizado!")
        } else {
            console.log("Saldo insuficiente!")
        }
        break;
    case 3:
        console.log("Operação - Depósito" + "\n");
        valor = leia.questionFloat("Digite o valor: ");
        console.log("Novo Saldo: " + (valor + saldo));
        break;
}