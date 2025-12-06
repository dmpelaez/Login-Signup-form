/*
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {dates, saveStorage, dateInput4} from './jspractice.js';


const dateContainer = document.querySelector('.date');
const dateEnter = document.querySelector('.dateInput'); 
const enter = document.querySelector('.enter');  


function renderDates() {
   const today = dayjs();
  dates.forEach((date) => {
  
  const date2 = today.add(date.deliveryDates, 'days');
  const daysFromNow = date2.format('dddd, MMMM D');

 dateContainer.innerHTML += `<p>${daysFromNow}</p>`;


  });
};

function appendDates(daysFromNow) {
  dateContainer.innerHTML += `<p>${daysFromNow}</p>`;
};


function handleInput(value) {
 const dateInput2 = Number(value);
dateInput4(dateInput2);
const today = dayjs();
const dayDates = today.add(dateInput2, 'days');
const daysFromNow = dayDates.format('dddd, MMMM D, YYYY');

appendDates(daysFromNow);
saveStorage();

};

enter.addEventListener('click', () => {
  handleInput(dateEnter.value);
  dateEnter.value = '';
});

dateEnter.addEventListener('keydown', (event) => {
 if (event.key === 'Enter') {
  handleInput(dateEnter.value);
  dateEnter.value = '';
 };
});




 

renderDates();
*/





import {nameOfPeople, nameInputType, saveStorage} from './PracticeFolder1/jspractice.js';



const name2 = document.querySelector('.scrollbar');
const nametype = document.querySelector('.name');
const nameEnter = document.querySelector('.nameEnter');

function OldNames() {

 nameOfPeople.forEach((name) => {
  
  name2.innerHTML += `<p>${name.name}</p>`;
 });
};

function newNames(name) {
  name2.innerHTML += `<p>${name}</p>`
};

function handleInput(value) {
const name = value;
nameInputType(name);
newNames(name);
saveStorage();
};

nametype.addEventListener('keydown', (event) => {
  
  if (event.key === 'Enter') {
  handleInput(nametype.value);
  nametype.value = '';
  };
});

nameEnter.addEventListener('click', () => {
  handleInput(nametype.value);
  nametype.value = '';
})





OldNames();






















