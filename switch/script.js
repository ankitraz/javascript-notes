'use strict';

const box = document.querySelector('.box')
const slider = document.querySelector('.slider')
const text = document.querySelector('.text')

box.addEventListener('click',function(){
    if (box.classList.contains('on')) {
        box.classList.remove('on');
        slider.classList.remove('on');
        document.querySelector('.container').classList.remove('purple')
        text.classList.remove('white')
    } else {
        box.classList.add('on');
        slider.classList.add('on');
        document.querySelector('.container').classList.add('purple')
        text.classList.add('white')
    }
})

