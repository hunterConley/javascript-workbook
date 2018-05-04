'use strict';

//Function accepts an array and uses a forEach
let olympianNames = [];

const printListOfOlympians = (olympianNames) => {

    olympianNames.forEach(item => console.log(item));
};
//Call Function
printListOfOlympians(olympianNames = ['Keith', 'Raul', 'Hunter', 'Sarah', 'Beth']);