function load() {
    alert("Página carregada.");
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar.";
}

function negritar() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar.</b>";
}

function abrir() {
    window.open("http://www.google.com");
}

function redirecionar() {
    window.location.href = "http://www.google.com";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

// Um outro jeito é você passar o elemento como parâmetro. E aí você não precisa pegar o elemento pelo id.

function trocar2(elemento) {
    elemento.innerHTML = "Obrigada por passar o mouse!";
}

function voltar2(elemento) {
    elemento.innerHTML = "Passe o mouse aqui.";
}

function change(elemento) {
    console.log(elemento.value);   
}