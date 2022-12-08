const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hamburguer = $('.hamburguer');

hamburguer.addEventListener('click', showMenu);

function showMenu(){
    $('.container').classList.toggle('show-menu');
}
