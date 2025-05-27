const leia = require('readline-sync');

let tipo1, tipo2, tipo3;

console.log("Digite as caracteristicas do tipo de animal escolhido")
tipo1 = leia.question("Digite a primeira caracteristica(vertebrado/invertebrado): ");
tipo2 = leia.question("Digite a segunda caracteristica(ave/mamifero/inseto/anelideo): ");
tipo3 = leia.question("Digite a terceira caracteristica(hematofago/herbivoro/onivoro/carnivoro): ");

if(tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "carnivoro"){
    console.log("Animal: Águia");
} else if (tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "onivoro") {
    console.log("Animal: Pomba");
} else if (tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "onivoro"){
    console.log("Animal: Homem");
} else if (tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "herbivoro"){
    console.log("Animal: Vaca");
} else if (tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "hematofago"){
    console.log("Animal: Pulga");
} else if (tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "herbivoro"){
    console.log("Animal: Lagarta");
} else if (tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "hematofago"){
    console.log("Animal: Sangue");
}else if (tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "onivoro"){
    console.log("Animal: Minhoca");
} else{
    console.log("Erro")
}
