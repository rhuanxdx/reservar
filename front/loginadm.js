document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    fetch('https://reservar.glitch.me/loginusuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, senha: senha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.menssagem === 'Sucesso!') {
            sessionStorage.setItem('email', data.email);
            window.location.href = 'admprincipal.html';

        } else {
            alert('E-mail e/ou Senha inválidos');
        }
    })
    .catch(error => console.error('Erro:', error));
  });
});

