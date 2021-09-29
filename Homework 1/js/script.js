'use strict';

const FIRST_NUMBER = Number(prompt('Введите первое число'));
const SECOND_NUMBER = Number(prompt('Введите второе число'));

function firstTask() {
  if (FIRST_NUMBER && SECOND_NUMBER) {
    return console.log(FIRST_NUMBER.toString(SECOND_NUMBER));
  } else {
    return console.log('Некорректный ввод!');
  }
 
}

function secondTask() {
  if (!FIRST_NUMBER || !SECOND_NUMBER){
    return console.log('Некорректный ввод!');
  } else {
    return console.log(`Ответ: ${FIRST_NUMBER + SECOND_NUMBER}, ${FIRST_NUMBER / SECOND_NUMBER}`);
  }
}


