let nomeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert('digite um nome válido');
    }
    if (nome) {
        nomeAmigos.push(nome);
        amigo.value = '';
        atualizarListaDeAmigos();
        
    }

}

function atualizarListaDeAmigos() {
    const listElement = document.getElementById('nomeAmigos');
    listElement.innerHTML = "";

    for (let amigo of nomeAmigos) {
        let elementoLi = document.createElement('li');
        elementoLi.textContent = amigo;
        listElement.appendChild(elementoLi);

    }


}

function sortearAmigo(){
    if(nomeAmigos.length === 0){
        alert('você não adicionou amigos para o sorteio, por favor, adicione seus amigos!!')
        return;
    }
const amigoAleatorio = Math.floor(Math.random() * nomeAmigos.length)
const amigoSorteado = nomeAmigos[amigoAleatorio];
const resultado = document.getElementById('resultado');
resultado.innerHTML = 'Amigo sorteado: ' + amigoSorteado;

}






