const leia = require('readline-sync');

let nomeColaborador, codCargo, salario, percentual;

nomeColaborador = leia.question("Digite o nome do colaborador: ");
codCargo = leia.questionInt("Digite o numero do cargo: ");
salario = leia.questionFloat("Digite o salario: ");

switch(codCargo){
    case 1:
        percentual = 0.10;
        console.log("Nome do colaborador: " + nomeColaborador + "\n" + "Cargo: Gerente" + "\n" + "Salario total: " + (salario + (percentual * salario)));
        break;
    case 2:
        percentual = 0.07;
        console.log("Nome do colaborador: " + nomeColaborador + "\n" + "Cargo: Vendedor" + "\n" + "Salario total: " + (salario + (percentual * salario)));
        break;
    case 3:
        percentual = 0.09;
        console.log("Nome do colaborador: " + nomeColaborador + "\n" + "Cargo: Supervisor" + "\n" + "Salario total: " + (salario + (percentual * salario)));
        break;
    case 4:
        percentual = 0.06;
        console.log("Nome do colaborador: " + nomeColaborador + "\n" + "Cargo: Motorista" + "\n" + "Salario total: " + (salario + (percentual * salario)));
        break;
    case 5:
        percentual = 0.05;
        console.log("Nome do colaborador: " + nomeColaborador + "\n" + "Cargo: Estoquista" + "\n" + "Salario total: " + (salario + (percentual * salario)));
        break;
    case 6:
        percentual = 0.08;
        console.log("Nome do colaborador: " + nomeColaborador + "\n" + "Cargo: Tecnico de TI" + "\n" + "Salario total: " + (salario + (percentual * salario)));
        break;
    default:
        console.log("Codigo de cargo nao encontrado");
        break;
}