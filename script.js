const cars = ['Mazda RX7 FB', 'Mazda RX7 FC', 'Mazda RX7 FD', 'Mazda RX8', 'Mazdaspeed 3', 'Mazda Miata NA', 'Mazda Miata NB',
'Mazda Miata NC', 'Mazda Miata ND'];

let carsNum = 8;



let alreadySeen = new Array(cars.length).fill(false);

function generateRandomCar(cars){

    let availableCars = cars.filter(function(_, index) {
        return !alreadySeen[index];
    });

    if (availableCars.length === 0) {
        alreadySeen.fill(false);
        availableCars = cars;
    }

    const randomNumber = Math.floor(Math.random() * availableCars.length);
    const chosenCar = availableCars[randomNumber];

    const chosenIndex = cars.indexOf(chosenCar);
    alreadySeen[chosenIndex] = true;

    return chosenCar;
}

function displayRandomCar(cars, num){

    const car = generateRandomCar(cars);
    document.getElementById('car' + num).innerHTML = car;

}

for (let i=1; i<=carsNum; i++){
    displayRandomCar(cars, i);
}

// ------------------------------------------

function displayCurrentMatch(iter){

    document.getElementById('current1').innerHTML = document.getElementById('car' + iter).innerHTML;
    document.getElementById('current2').innerHTML = document.getElementById('car' + (iter + 1)).innerHTML;

    attachEventListeners(iter);

}

function attachEventListeners(iter) {
    const element1 = document.getElementById('current1');
    const element2 = document.getElementById('current2');

    // Remove existing event listeners to prevent duplicates
    element1.replaceWith(element1.cloneNode(true));
    element2.replaceWith(element2.cloneNode(true));

    // Re-assign the elements due to cloning
    const newElement1 = document.getElementById('current1');
    const newElement2 = document.getElementById('current2');

    // Attach new event listeners with updated `iter`
    newElement1.addEventListener('click', function() {
        updateBoard(iter, true);
    });
    newElement2.addEventListener('click', function() {
        updateBoard(iter + 1, false);
    });
}

function updateBoard(iter, isOdd){
    let semiFinalNum = iter;
    if(!isOdd){
        semiFinalNum = semiFinalNum - 1;
    }
    document.getElementById('sf' + semiFinalNum).innerHTML = document.getElementById('car' + iter).innerHTML;
    if(!isOdd){
        displayCurrentMatch(iter+1);
    }
    else{
        displayCurrentMatch(iter+2);
    }
}

let iterator = 1;
displayCurrentMatch(iterator);