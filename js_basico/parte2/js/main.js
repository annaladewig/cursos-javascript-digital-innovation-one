// FUNÇÕES

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 10));


function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

console.log(setReplace('Vai Japão!', 'Japão', 'Brasil'));


var idade = prompt("Qual a sua idade?"); //Variável global

function validarIdade(idade) {
    var validar;  // Variável local
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
} 

console.log(validarIdade(idade));