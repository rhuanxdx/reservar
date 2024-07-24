import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

document.addEventListener("DOMContentLoaded", function () {
  // Verificar se o ID do usuário está presente no sessionStorage
  var email = sessionStorage.getItem("email");

  if (!email) {
    // Se o ID do usuário não estiver presente, redirecionar para a página de login
    window.location.href = "/index.html";
  }
});

var form = document.querySelector("form");    

form.addEventListener("submit", function(e) {        
                                                    
    e.preventDefault();

    var nome = document.querySelector("#nome").value;
    var descrição = document.querySelector("#descrição").value;
    var numero_sala = document.querySelector("#numero_sala").value;
    var capacidade = document.querySelector("#capacidade").value;
    var andar = document.querySelector("#andar").value;
    var predio = document.querySelector("#predio").value;
    // var horarios_disponiveis = document.querySelector("#horarios_disponiveis").value;
    var largura = document.querySelector("#largura").value;
    var comprimento = document.querySelector("#comprimento").value;
    var area = document.querySelector("#area").value;


        
    axios.post('https://reservar.glitch.me/cadastrarespaco', {
        nome: nome,
        descrição: descrição,
        numero_sala: numero_sala,
        capacidade: capacidade,
        andar: andar,
        predio: predio,
        // horarios_disponiveis: horarios_disponiveis,
        largura: largura,
        comprimento: comprimento,
        area: area
      })
      .then(function (response) {
        console.log(response);
        alert("Cadastro feito com sucesso!")
      })
      .catch(function (error) {
        console.log(error);
      });

});

// Cadastro

function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText

}

function ciraLinha(usuario){
  
  let linha = document.createElement("tr")
  let tdNome = document.createElement("td")
  let tdEmail = document.createElement("td")
  let tdSenha = document.createElement("td")
  tdNome.innerHTML = usuario.nome
  tdEmail.innerHTML = usuario.email
  tdSenha.innerHTML = usuario.senha

  linha.appendChild(tdNome);
  linha.appendChild(tdEmail);
  linha.appendChild(tdSenha);

 



  return linha;
}

function main(){
  let data = fazGet("https://reservar.glitch.me/verusuarios")
  let usuarios = JSON.parse(data)
  let tabela = document.getElementById("tabela")
  

  usuarios.forEach(element =>{
    let linha = ciraLinha(element);
    tabela.appendChild(linha);
  }) 
 
}

main()


 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const tabela = document.getElementById("tabela");
  const mensagemAutorizacao = document.getElementById("mensagem-autorizacao");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // valores do formulário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      // nova linha na tabela
      const newRow = tabela.insertRow();
      newRow.innerHTML = `<td>${nome}</td><td>${email}</td><td>${senha}</td><td><button class="autorizar-button">Autorizar</button></td><td><button class="rejeitar-button">Rejeitar</button></td>`;

      // limpa o formulário
      form.reset();

      // botão de rejeição
      const rejeitarButton = newRow.querySelector(".rejeitar-button");
      rejeitarButton.addEventListener("click", function () {
          // remove a linha da tabela
          tabela.deleteRow(newRow.rowIndex);
      });

      // botão de autorização
      const autorizarButton = newRow.querySelector(".autorizar-button");
      autorizarButton.addEventListener("click", function () {
          // mensagem de autorização
          mensagemAutorizacao.style.display = "block";

          // remove a linha da tabela
          tabela.deleteRow(newRow.rowIndex);
      });
  });
});