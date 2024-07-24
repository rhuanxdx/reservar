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

    var recurso = document.querySelector("#recurso").value;
    var quantidade = document.querySelector("#quantidade").value;
    var descricao = document.querySelector("#descricao").value;
    var espaco_fisico = document.querySelector("#espaco_fisico").value;
        
    axios.post('https://reservar.glitch.me/cadastrarrecurso', {
        recurso: recurso,
        quantidade: quantidade,
        descricao: descricao,
        espaco_fisico: espaco_fisico
      })
      .then(function (response) {
        console.log(response);
        alert("Cadastro feito com sucesso!")
      })
      .catch(function (error) {
        console.log(error);
      });

});