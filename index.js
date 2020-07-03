'use strict';

const arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

arr.map(el => el === 'c' ? flag = true : flag);

alert(flag ? 'есть' : 'нет');
