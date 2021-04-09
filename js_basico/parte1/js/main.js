var nome = "Anna Ladewig";
var n1 = 25;
var n2 = 20;
var frase = "Japão é o melhor time do mundo."

//alert("Bem Vindo(a) " + nome);
//alert(nome + " tem " + n1 + " anos");
//alert(n1 + n2);

console.log(nome);
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(n1 + n2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));


//ARRAY

// Criando um Array.
var lista = ["uva", "pêra", "laranja", "banana"];
console.log(lista);
console.log(lista.length);

//Acessa um item (index) do Array.
console.log(lista[1]);

// Adiciona um item ao final do Array. 
lista.push("maçã");
console.log(lista);
console.log(lista.length);

//Remove um item do final do Array (o último).
lista.pop();
console.log(lista);
console.log(lista.length);

//Remove itens de uma posição de índice.
var pos = 1, n = 2;
var itensRemovidos = lista.splice(pos, n);
// O n define o número de itens a se remover, a partir da posição (pos) em direção ao fim do array.
console.log(lista);
console.log(lista.length);

//Inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
var meuArray = ['one', 'two', 'three'];
meuArray.reverse();

console.log(meuArray); // ['three', 'two', 'one']
console.log(lista.reverse());

//Transforma em string.
console.log(lista.toString());

//Também transforma em string, e modifica o separador do array.
console.log(lista.join(" - "));
console.log(lista.join("|"));


//DICIONÁRIO

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

//Lista de Dicionários
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxo"}];
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);


//CONDICIONAL

//O comando prompt vai exibir uma pergunta no browser. E o que o usuários responder, vai ser gravado na variável.
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
};


//LAÇOS DE REPETIÇÃO

var count = 0;
while (count < 5){
    console.log(count);
    count++;
}

for(var i=0; i<5; i++) {
    console.log(i);
};


//DATE

var d = new Date();
console.log(d);
//O valor retornado por getDay() é um inteiro que corresponde com o dia da semana: 0 para Domingo, 1 para Segunda-Feira, 2 para Terça-Feira, e assim por diante.
console.log(d.getDay());
//O month ele sempre vai iniciar do zero, então você tem que sempre adicionar +1 pra ficar certo.
console.log(d.getMonth() + 1);
console.log(d.getFullYear());
console.log(d.getHours());
