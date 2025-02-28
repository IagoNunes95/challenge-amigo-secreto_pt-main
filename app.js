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
dispararConfete();

}

function dispararConfete() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}