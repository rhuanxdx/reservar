// Função para validar o formulário
function validateForm() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirmSenha = document.getElementById("Confirmarsenha").value;
  var checkbox = document.getElementById("dropdownCheck").checked;

  // Adicione lógica de validação adicional, se necessário
  if (nome === "" || email === "" || senha === "" || confirmSenha === "" || !checkbox) {
      alert("Por favor, preencha todos os campos e concorde com os termos da Política de Privacidade.");
      return false;
  }

  // Verificação de confirmação de senha
  if (senha !== confirmSenha) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return false;
  }

  return true;
}

// Função para abrir o modal de sucesso
function openSuccessModal() {
  var successModal = document.getElementById("successModal");
  successModal.classList.add('active');
}

// Função para fechar o modal
function closeModal() {
  var modals = document.querySelectorAll('.modal-container');
  modals.forEach(function (modal) {
      modal.classList.remove('active');
  });
}

// Função para abrir o modal se o formulário for válido
function openModalIfValid() {
  if (validateForm()) {
      openSuccessModal();
  }
}
