const leia = require('readline-sync');

let nomeDoador, idade, doacao;

nomeDoador = leia.question("Digite o nome do doador: ");
idade = leia.questionInt("Digite a idade do doador: ");
doacao = leia.keyInYNStrict("Primeira doacao de sangue?: ");

if (idade >= 18 && idade <= 59){
    console.log(nomeDoador + " esta apto(a) para doar sangue!");
} else if (idade >= 60 && idade <= 69 && doacao === false){
    console.log(nomeDoador + " esta apto(a) para doar sangue!");
} else if (idade >= 60 && idade <= 69 && doacao === true){
    console.log(nomeDoador + " não esta apto(a) para doar sangue!")
} else {
    console.log(nomeDoador + " não esta apto(a) para doar sangue!")
}