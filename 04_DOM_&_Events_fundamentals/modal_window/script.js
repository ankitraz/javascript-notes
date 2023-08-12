'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
// when you select a class which is used multiple times using queryselector it only selects the first one.
// to select all instance of that class just use 'queryselectorall'
const btnsShowModal = document.querySelectorAll('.show-modal') // returns a nodeList which is kinda similar to arrays but not array.it will contain all the elements which class '.show-modal;

// fucntion for closing 
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function(){
    console.log('Button clicked');

    // adding and removing classes 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


console.log(btnsShowModal);

for(let i = 0; i< btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click', closeModal) // we are not calling the function closeModal here. // we should not use closeModal() (with a parenthesis here)

overlay.addEventListener('click', closeModal)


// handling keypress event

document.addEventListener('keydown', function(e){
    console.log(e.key); // this will log the key pressed on the keyboard. javascript will automatically pass the event object to the handler function. we can name it anything we want. here we named it 'e'

    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})