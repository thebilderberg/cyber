"use strict";


function buttonClickOne() {
  let clickOne = document.querySelector('.bottomClassOne');
  clickOne.addEventListener('click', oneBotton);
}


function oneBotton() {
  alert('Тут ничего нет');
}


function buttonClickTwo() {
  let clickOne = document.querySelector('.bottomClassTwo');
  clickOne.addEventListener('click', twoBotton);
}
function twoBotton() {
  alert('Тут ничего нет');
}


function buttonClickThree() {
  let clickOne = document.querySelector('.bottomClassThree');
  clickOne.addEventListener('click', threeBotton);
}
function threeBotton() {
  alert('Тут ничего нет');
}


function buttonClickFour() {
  let clickOne = document.querySelector('.bottomClassFour');
  clickOne.addEventListener('click', exitSms);
}
function exitSms() {
  alert('Ты нащёл приключений на жопу, чумба!');
}




buttonClickOne();
buttonClickTwo();
buttonClickThree();
buttonClickFour();
