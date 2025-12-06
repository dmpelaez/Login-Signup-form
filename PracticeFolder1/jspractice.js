/*
export let dates = JSON.parse(localStorage.getItem('dates'));

if (!dates) {
 dates = [{
  deliveryDates: 5
}, 
{
  deliveryDates: 30
}];
};

export function saveStorage() {
  localStorage.setItem('dates', JSON.stringify(dates));
}

export function dateInput4(dateInput2) {
  dates.push({
    deliveryDates: dateInput2,
  });
 
};
*/
 export let nameOfPeople = JSON.parse(localStorage.getItem('pipol'));
 
 
 if (!nameOfPeople) {
 nameOfPeople =  [{
  name: 'Delmar Pelaez'
}, {
  name: 'Delmar Pelaez'
}];
 };

 export function saveStorage() {
  localStorage.setItem('pipol', JSON.stringify(nameOfPeople));
 }

export function nameInputType(name) {
  nameOfPeople.push({
    name: name,
  });
};
   




