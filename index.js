// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
  };

function returnLastTwoDrivers(drivers){
    const lastTwo = drivers.slice(-2);
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function(cost){
        return (fareMultiplier*cost);
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driver){
    return  driver(drivers);
};
