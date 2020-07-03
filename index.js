'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flag = false;

arr.map(el => el === 5 ? flag = true : flag);

alert(flag ? 'да' : 'нет');
