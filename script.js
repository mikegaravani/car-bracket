const cars = [
    { model: 'Mazda RX7 FB', imageUrl: 'images/mazdarx7fb.jpeg' },
    { model: 'Mazda RX7 FC', imageUrl: 'images/mazdarx7fc.jpeg' },
    { model: 'Mazda RX7 FD', imageUrl: 'images/mazdarx7fd.jpeg' },
    { model: 'Mazda RX8', imageUrl: 'images/mazdarx8.jpeg' },
    { model: 'Mazdaspeed 3', imageUrl: 'images/mazdaspeed3.jpeg' },
    { model: 'Mazda Miata NA', imageUrl: 'images/mazdamiatana.jpeg' },
    { model: 'Mazda Miata NB', imageUrl: 'images/mazdamiatanb.jpeg' },
    { model: 'Mazda Miata NC', imageUrl: 'images/mazdamiatanc.jpeg' },
    { model: 'Mazda Miata ND', imageUrl: 'images/mazdamiatand.jpeg' }
];

let carsNum = 8;

let semiFinalsDone = false;

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

    const modelNameElement = document.getElementById('car' + num);
    modelNameElement.innerText = car.model;
    
    const imageElement = document.getElementById('carImage' + num);
    imageElement.src = car.imageUrl;
    imageElement.alt = 'Image of ' + car.model;

}

for (let i=1; i<=carsNum; i++){
    displayRandomCar(cars, i);
}

// ------------------------------------------

function displayCurrentMatch(iter){

    if (iter > carsNum){
        if(!semiFinalsDone){
            switchToSemiFinals(1);
        }
        else{
            switchToFinal();
        }
    }
    else{
        document.getElementById('current1').innerText = document.getElementById('car' + iter).innerText;
        document.getElementById('current2').innerText = document.getElementById('car' + (iter + 1)).innerText;

        document.getElementById('currentImage1').src = document.getElementById('carImage' + iter).src;
        document.getElementById('currentImage2').src = document.getElementById('carImage' + (iter + 1)).src;

        attachEventListeners(iter);
    }
}

function attachEventListeners(iter) {
    const element1 = document.getElementById('button1');
    const element2 = document.getElementById('button2');

    // Remove existing event listeners to prevent duplicates
    element1.replaceWith(element1.cloneNode(true));
    element2.replaceWith(element2.cloneNode(true));

    // Re-assign the elements due to cloning
    const newElement1 = document.getElementById('button1');
    const newElement2 = document.getElementById('button2');

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
    if(isOdd){
        semiFinalNum = semiFinalNum + 1;
    }
    console.log(semiFinalNum);
    document.getElementById('sf' + (semiFinalNum/2)).innerText = document.getElementById('car' + iter).innerText;
    document.getElementById('sfImage' + (semiFinalNum/2)).src = document.getElementById('carImage' + iter).src;
    if(!isOdd){
        displayCurrentMatch(iter+1);
    }
    else{
        displayCurrentMatch(iter+2);
    }
}

let iterator = 1;
displayCurrentMatch(iterator);

function switchToSemiFinals(iter){

    console.log('we got there'); // TODO REMOVE THIS

    carsNum = carsNum/2;
    semiFinalsDone = true;
    for(let i=1; i<=carsNum; i++){

        document.getElementById('sf' + i).id = 'car' + i;
        document.getElementById('sfImage' + i).id = 'carImage' + i;

        if(i <= 2){
            document.getElementById('f' + i).id = 'sf' + i;
            document.getElementById('fImage' + i).id = 'sfImage' + i;
        }

    }

    displayCurrentMatch(iter);

}

function switchToFinal(){
    
}