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
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nomeAmigos.forEach(amigo => {
        lista.innerHTML += "<li>" + amigo + "</li>";
        console.log(amigo);
    });

}



