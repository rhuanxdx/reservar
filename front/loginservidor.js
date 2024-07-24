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
          
           if (data.autorizar === 1) {
             
              sessionStorage.setItem('idusuario', data.idusuario);
              window.location.href = './servprincipal.html';
          } else if (data.autorizar == 0) {
              alert(data.menssagem);
          } else {
              alert(data.menssagem);
          }
      })
      .catch(error => console.error('Erro:', error));
  });
});
