let nomeAmigos = [];

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;
    if(nome.trim() === ""){
        alert('digite um nome válido');
    }else{
        document.getElementById("listaAmigos").innerHTML = nome;
    }
    
}
// até aqui já temos um trecho do código que consegue apresentar o nome digitado na listaAmigos, preciso ver como armazenar os nomes
// no array e após armazenar, limpar o campo de texto para receber um novo nome.

