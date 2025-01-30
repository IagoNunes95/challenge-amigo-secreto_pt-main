let nomeAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome.trim() === "") {
        alert('digite um nome válido');
    } else {
        nomeAmigos.push([nome]);
        nome = document.querySelector('input');
        nome.value = "";
        document.getElementById("listaAmigos").innerHTML = nomeAmigos;
        console.log(nomeAmigos);
    }
    
}



