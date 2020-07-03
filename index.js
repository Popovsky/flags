'use strict';

const num = 31;
let flag = false;

for (let i = 2; i < num; i++) {
    if (!(num % i)) {
        flag = true;
    }
}

alert(flag);
