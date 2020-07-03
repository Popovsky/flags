'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flag = false;

array.map((el, i, arr) => el === arr[i - 1] ? flag = true : flag);

alert(flag ? 'да' : 'нет');
