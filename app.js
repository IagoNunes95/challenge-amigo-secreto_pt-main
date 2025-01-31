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
        console.log(nomeAmigos);
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





