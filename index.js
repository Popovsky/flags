'use strict';

const array = ['a', 'b', 'c', 'd', 'e'];

/**
 *
 * @param {array} arr
 * @returns {boolean}
 */
function hasElem(arr) {
    let flag = false;
    arr.map(el => el === 'c' ? flag = true : flag);
    return flag;
}

hasElem(array);
