// --> Operadores binários

// <= menor ou igual à
// >= maior ou igual à
// < menor que 
// > maior que
// != diferente
// !== diferente restrito
// == igual
// === igual restrito

//  --> Operadores lógicos

// ! negação

// -->

// && conjunção - e 
// || disjunção - ou

// --> Estrutura de IF e ELSE
// if (true) {
//     // Condição atendida
// } else {
//     // Senão faça outra coisa aqui dentro
// }

console.log("Zero é menor que dois?");
console.log (0 < 2);
console.log("Dois é menor que dois?");
console.log (2 < 2);

console.log("O inteiro é igual a 0 string");
console.log(0 == "0"); // da verdadeiroo

console.log ("0 inteiro é igual a 0 string (Utilizando o operador restrito)?");
console.log(0 === "0"); // da falso
console.log(1 === true);// da falso


// var nota_aluno = 7;
// var faltas = 23;
// Criar condição onde, o aluno no mínimo 7 e no máximo 20 faltas;

var faltas;
var nota;

if (nota >= 7 && faltas <= 20) {
    console.log("Aluno passou!");
} else { // nota < 7 || faltas > 20
    console.log("Aluno não passou!");
}

// Terceiro caso:
// Eu quero testar os alunos que foram reprovados
// A nota menor que 7, ou mais de 20 faltas
var nota, faltas;
if (nota < 7 || faltas > 20) {
    console.log("Aluno reprovou!")
} else { // nota >= 7 && faltas <= 20
    console.log("Aluno passou!")
}

// Operação natural: nota >= 7 && faltas <= 20
// Operação inversa: nota < 7 || faltas > 20



