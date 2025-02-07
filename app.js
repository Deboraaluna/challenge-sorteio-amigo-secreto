const listaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");

let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (nome == "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = "";
    atualizarLista();
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botão para remover o nome da lista (opcional)
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "X";
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `🎉 O amigo secreto é: ${sorteado}!`;
}
