const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

document.querySelector('#concluir').addEventListener('click', () => {
    let recurso = document.querySelector('#recurso').value;
    let quantidade = document.querySelector('#quantidade').value;
    let espaçoFisico = document.querySelector('#espaco-fisico').value;
    let descricao = document.querySelector('#descricao').value;

    if(document.querySelector('#espaco-fisico-cadastrado').value != espaçoFisico) {
        console.log('if')
        document.querySelector('#recursos').innerHTML += `
        <div class="recursos">
        <h4>Espaço físico: ${espaçoFisico} ${descricao}</h4>
        <span>Recurso: ${recurso}</span>
        <span>Quantidade: ${quantidade}</span>
        <button class = "btn-associar">Associar</button>
        <style>
        .btn-associar{
            background-color: rgba(59, 250, 246, 0.83);
            height: 3rem;
            width: 7rem;
            margin-left: 32rem;
            border-radius: 1rem;

        }
        </style>
        </div>
        `;
    } else {
        console.log('else')
        document.querySelector('#recursos').lastElementChild.innerHTML += `
            <span>Recurso: ${recurso}</span>
            <span>Quantidade: ${quantidade}</span>
        `;
    }

    document.querySelector('#espaco-fisico-cadastrado').value = espaçoFisico;
});

