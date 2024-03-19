
const cars = [
    // Note: the 'pricepoint' property does not necessarily represent the financial value of the car, but rather its competitive ballpark
    // 'isOld' takes into account cars made before roughly 2000
    { model: 'Mazda RX7 FB', imageUrl: 'images/mazdarx7fb.jpeg', pricePoint: 20, brand: 'Mazda', isOld: true },
    { model: 'Mazda RX7 FC', imageUrl: 'images/mazdarx7fc.jpeg', pricePoint: 20, brand: 'Mazda', isOld: true },
    { model: 'Mazda RX7 FD', imageUrl: 'images/mazdarx7fd.jpeg', pricePoint: 50, brand: 'Mazda', isOld: true },
    { model: 'Mazda RX8', imageUrl: 'images/mazdarx8.jpeg', pricePoint: 10, brand: 'Mazda', isOld: false },
    { model: 'Mazdaspeed 3', imageUrl: 'images/mazdaspeed3.jpeg', pricePoint: 10, brand: 'Mazda', isOld: false },
    { model: 'Mazda Miata NA', imageUrl: 'images/mazdamiatana.jpeg', pricePoint: 10, brand: 'Mazda', isOld: true },
    { model: 'Mazda Miata NB', imageUrl: 'images/mazdamiatanb.jpeg', pricePoint: 10, brand: 'Mazda', isOld: true },
    { model: 'Mazda Miata NC', imageUrl: 'images/mazdamiatanc.jpeg', pricePoint: 10, brand: 'Mazda', isOld: false },
    { model: 'Mazda Miata ND', imageUrl: 'images/mazdamiatand.jpeg', pricePoint: 20, brand: 'Mazda', isOld: false }
];

let carsNum = 8;

let semiFinalsDone = false;

let alreadySeen = new Array(cars.length).fill(false);

for (let i=1; i<=carsNum; i++){
    displayRandomCar(cars, i);
}

// ------------------------------------------

let iterator = 1;
displayCurrentMatch(iterator);