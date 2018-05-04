'use strict';

//Function accepts an array and uses a forEach
const olympianNames = ['Keith', 'Raul', 'Hunter', 'Sarah', 'Beth'];

const printListOfOlympians = (olympianNames) => {


    olympianNames.forEach(item => console.log(item));
};

printListOfOlympians(olympianNames);