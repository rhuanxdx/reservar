import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

var form = document.querySelector("form");    

form.addEventListener("submit", function(e) {        
                                                    
    e.preventDefault();
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;     
    var senha = document.querySelector("#senha").value;
    var confirmarsenha = document.querySelector("#Confirmarsenha").value;

    if(confirmarsenha != senha){
        alert("Confirme sua senha para efetuar o cadatro");
    }
    
    else{
        axios.post('https://reservar.glitch.me/cadastrarusuario', {
      nome: nome,  
      email: email,
      senha: senha
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    alert("Agurade a confirmação do Administrador!")
}});

