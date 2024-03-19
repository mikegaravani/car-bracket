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