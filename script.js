let carsNum = 8;

let semiFinalsDone = false;

let alreadySeen = new Array(cars.length).fill(false);

for (let i=1; i<=carsNum; i++){
    displayRandomCar(cars, i);
}

// ------------------------------------------

let iterator = 1;
displayCurrentMatch(iterator);