// Função para realizar uma solicitação GET síncrona
function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function rejeitarUsuario(usuario) {
    console.log(usuario);
    axios.put(`https://reservar.glitch.me/rejeitarusuario/${usuario.idusuario}`)
    // axios.post('https://reservar.glitch.me/rejeitarusario', { id: usuario.id })

        .then(response => {
            console.log("Sucesso!");
        })
        .catch(error => {
            console.error("Erro!", error);
        });
        
        
}

function autorizarUsuario(usuario) {
    console.log(usuario);
    axios.put(`https://reservar.glitch.me/autorizarusuario/${usuario.idusuario}`)

        .then(response => {
            console.log("Sucesso!");
        })
        .catch(error => {
            console.error("Erro!", error);
        });
}

// Função para atualizar o status do usuário (autorizar ou rejeitar)
function atualizarStatusUsuario(userId, autorizado) {
    axios.post('https://reservar.glitch.me/autorizar', { id: userId, autorizado })
        .then(response => {
            console.log("Status do usuário atualizado com sucesso!");
            let tabela = document.getElementById("tabela");
            let linhaRemover = document.getElementById(`usuario-${userId}`);
            tabela.removeChild(linhaRemover);
        })
        .catch(error => {
            console.error("Erro ao atualizar o status do usuário:", error);
        });
}

// Função para permitir o login quando o usuário é autorizado
function permitirLogin(usuario) {
    axios.post('https://reservar.glitch.me/autorizarlogin', { id: usuario.idusuario })
        .then(response => {
            console.log("Login autorizado com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao autorizar o login:", error);
        });
}

// Função para criar uma linha na tabela
function criarLinha(usuario) {
    let linha = document.createElement("tr");
    linha.id = `usuario-${usuario.idusuario}`;

    // Criação das células da linha
    let tdNome = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdAutorizar = document.createElement("td");
    let tdRejeitar = document.createElement("td");

    // Preenchimento das células com os dados do usuário
    tdNome.innerHTML = usuario.nome;
    tdEmail.innerHTML = usuario.email;

    // Botão Autorizar
    let autorizarButton = document.createElement("button");
    autorizarButton.classList.add("autorizar-button");
    autorizarButton.textContent = "Autorizar";
    autorizarButton.addEventListener("click", function () {
        autorizarUsuario(usuario)
        
    });
    tdAutorizar.appendChild(autorizarButton);

    // Botão Rejeitar
    let rejeitarButton = document.createElement("button");
    rejeitarButton.classList.add("rejeitar-button");
    rejeitarButton.textContent = "Rejeitar";
    rejeitarButton.addEventListener("click" , function (){
    rejeitarUsuario(usuario)    }
 
    );
    tdRejeitar.appendChild(rejeitarButton);

    // Adição das células à linha
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdAutorizar);
    linha.appendChild(tdRejeitar);

    return linha;
}


// Função principal para preencher a tabela com usuários
function main() {
    let data = fazGet("https://reservar.glitch.me/verusuarios");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");

    usuarios.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

// Executa a função principal ao carregar o DOM
document.addEventListener("DOMContentLoaded", function () {
    // Verificar se o ID do usuário está presente no sessionStorage
    var email = sessionStorage.getItem("email");

    if (!email) {
      // Se o ID do usuário não estiver presente, redirecionar para a página de login
      window.location.href = "/index.html"; // Substitua "login.html" com a sua página de login
    } else {
    main();
    }
});
