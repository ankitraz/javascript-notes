'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
// when you select a class which is used multiple times using queryselector it only selects the first one.
// to select all instance of that class just use 'queryselectorall'
const btnsShowModal = document.querySelectorAll('.show-modal') // returns a nodeList which is kinda similar to arrays but not array.it will contain all the elements which class '.show-modal;


for(let i = 0; i < btnsShowModal.length; i++){
    console.log(btnsShowModal[i]);
}