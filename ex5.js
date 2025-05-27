const leia = require('readline-sync');

let codProduto;
let quantidade, preco;

codProduto = leia.questionInt("Digite o codigo do produto: ");
quantidade = leia.questionInt("Digite a quantidade: ");


switch(codProduto){
    case 1:
        preco = 10.00;
        console.log("Produto: Cachorro Quente" + "\n" +  "Valor total: " + (quantidade * preco));
        break;
    case 2:
        preco = 15.00;
        console.log("Produto: X-Salada" + "\n" +  "Valor total: " + (quantidade * preco));
        break;
    case 3:
        preco = 18.00;
        console.log("Produto: X-Bacon" + "\n" +  "Valor total: " + (quantidade * preco));
        break;
    case 4:
        preco = 12.00;
        console.log("Produto: Bauru" + "\n" +  "Valor total: " + (quantidade * preco));
        break;
    case 5:
        preco = 8.00;
        console.log("Produto: Refrigerante" + "\n" +  "Valor total: " + (quantidade * preco));
        break;
    case 6:
        preco = 13.00;
        console.log("Produto: Suco de Laranja" + "\n" +  "Valor total: " + (quantidade * preco));
        break;
    default:
        console.log("Código de produto não encontrado");
        break;
}