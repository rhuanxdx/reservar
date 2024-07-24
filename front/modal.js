const modal = document.querySelector('.modal-container');

function openModal() {
    modal.classList.add('active');

    // Adiciona eventos de clique aos botões dentro do modal
    const btnOK = document.querySelector('.btnOK');
    const btnClose = document.querySelector('.btnClose');

    btnOK.addEventListener('click', closeModal);
    btnClose.addEventListener('click', closeModal);
}

function closeModal() {
    modal.classList.remove('active');

    // Remove eventos de clique dos botões ao fechar o modal
    const btnOK = document.querySelector('.btnOK');
    const btnClose = document.querySelector('.btnClose');

    btnOK.removeEventListener('click', closeModal);
    btnClose.removeEventListener('click', closeModal);
}

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

// Função para abrir o modal se o formulário for válido
function openModalIfValid() {
    if (validateForm()) {
        openModal();
    }
}
