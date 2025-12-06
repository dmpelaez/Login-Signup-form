import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {date, dates, saveStorage} from '../PracticeFolder2/practice2.2.js';




const displayDate = document.querySelector('.displayOfDate');
const inputDates = document.querySelector('.input');
const enterButton = document.querySelector('.enter-button');

function oldDates() {
  dates.forEach((formatDates) =>{
    displayDate.innerHTML += `<p>${formatDates.formatDates}`;
  });
};

function newDates(formatDates) {
  displayDate.innerHTML += `<p>${formatDates}`;
}



function handleInput(formatDates) { 

  date(formatDates);
  newDates(formatDates);
  saveStorage();
};

inputDates.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    
const today = dayjs();

const dateEnter = today.add(inputDates.value, 'days');

const formatDates = dateEnter.format('dddd, MMMM D YYYY');


    handleInput(formatDates);
    inputDates.value = '';
  };
});

/*
enterButton.addEventListener('click', () => {
  const today = dayjs();

const dateEnter = today.subtract(inputDates.value, 'days');

const formatDates = dateEnter.format('dddd, MMMM D');


    handleInput(formatDates);
    inputDates.value = '';
});
*/

const button1 = document.querySelector('.js-button');
const button2 = document.querySelector('.js-button2');

document.querySelector('.option-button')
.addEventListener('click', (click) => {


  button1.classList.toggle('addbutton');

  button2.classList.toggle('subtractbutton');



 
});

button1.addEventListener('click', () => {


const today = dayjs();

const dateEnter = today.add(inputDates.value, 'days');

const formatDates = dateEnter.format('dddd, MMMM D YYYY');

    handleInput(formatDates);
    inputDates.value = '';
});

button2.addEventListener('click', () => {


const today = dayjs();

const dateEnter = today.subtract(inputDates.value, 'days');

const formatDates = dateEnter.format('dddd, MMMM D YYYY');

    handleInput(formatDates);
    inputDates.value = '';
});








oldDates();





 




