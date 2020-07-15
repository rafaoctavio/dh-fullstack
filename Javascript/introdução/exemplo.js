// Estrutura de uma variável: 
//      var nomeDaVariavel = VALOR;

// Tipos de Dados: 

// -> string, 
var string = "palavra qualquer";

//->numero,
var numero = 3;
var numero_2 = 3.15;
var numero_3 = -3.15;

//->boleans,
var boolean = true;
var boolean = false; 

//->funções,
var funcao = function() {/*conteudo de uma funcao */}

//->indefinido, 
var indefinida;

//->null, 
var nula = null;

//->arrays,
var arrays = ["segunda", "terca", "sexta", 5, true];

//->objetos 
var objetos_literais = {
    nome: "Rafael",
    idade: 37,    
}    
//Trazer valores de um array
console.log("VALOR DA VARIAVEL arrays true:");
console.log(arrays[4]);

//Trazer valores de um array
console.log("VALOR do nome no objeto literal:");
console.log(objetos_literais["nome"]);
console.log(objeto.nome);