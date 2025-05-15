const btnAvancar = document.getElementById('btn-avancar');
const projeto = document.querySelectorAll('.projeto');
let projetoAtual = 0;

 btnAvancar.addEventListener("click", () => {

    if (projetoAtual === projeto.length - 1) return;

    const projetoSelecionado = document.querySelector('.selecionado');
    projetoSelecionado.classList.remove("selecionado");

    projetoAtual++;
    projeto[projetoAtual].classList.add('selecionado');
 });

 const btnVoltar = document.getElementById('btn-voltar');

btnVoltar.addEventListener('click',  () => {

    if (projetoAtual === 0) return;


    const projetoSelecionado = document.querySelector('.selecionado');
    projetoSelecionado.classList.remove("selecionado");

    projetoAtual--;
    projeto[projetoAtual].classList.add('selecionado');
});
