// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2)
}
   
const returnLastTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2,4)
}

   
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(){
    return function (integer){
       return integer * integer
    }
}


function fareDoubler(createFareMultiplier){
    const doubleIt = createFareMultiplier * 2;
    return doubleIt
}


function fareTripler(createFareMultiplier){
    const tripleIt = createFareMultiplier * 3;
    return tripleIt
}




function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return drivers, returnFirstTwoDrivers()
}