let username = document.querySelector('#user-name');
let slides = document.querySelectorAll('.slide-quiz');
let liberaPlay = document.querySelector('.inicio');
let resultado = document.querySelector('.resultado');

let numeroSlide = 0;
let pontos = 0;

username.addEventListener('input', () => {
    if(username.value.length > 0)liberaPlay.disabled = false;
    else liberaPlay.disabled = true;
});

function proximoSlide(){

    if(numeroSlide == slides.length - 1){
        alert(`Parabéns, ${username.value}! Você concluiu o quiz com ${pontos} acertos!`);
        location.reload();
    } else {
        numeroSlide++;
        slides[numeroSlide - 1].classList.remove('ativo');
        slides[numeroSlide].classList.add('ativo');
    }
}

function check(thisButton){
    let liberaProximo = slides[numeroSlide].querySelector('.bnt-proximo');  
    let resposta = slides[numeroSlide].querySelectorAll('.bnt-opcao');

    if(thisButton.classList.contains('selecionada')) return;

    thisButton.classList.add('selecionada');
    liberaProximo.disabled = false;

    let checkIcon = document.createElement('i');

    if(thisButton.dataset.respostaCorreta == 'true'){
        thisButton.classList.add('certa');
        checkIcon.classList.add('fa-solid', 'fa-check');
        thisButton.appendChild(checkIcon);
        pontos++;

    } else {   
        thisButton.classList.add('errada');
        checkIcon.classList.add('fa-solid', 'fa-xmark');
        thisButton.appendChild(checkIcon);
    }

    resposta.forEach((button) => {
        button.disabled = true;
    });
}