// Note: the 'pricepoint' property does not necessarily represent the financial value of the car, but rather its competitive ballpark
// 'isOld' takes into account cars made before roughly 2000

// TODO FIX 911 S/T RATIO

// aspect-ratio: 1040 / 693;

const cars = [
    { model: 'Mazda RX7 FB', imageUrl: 'images/mazdarx7fb.jpeg', pricePoint: 20, brand: 'Mazda', isOld: true },
    { model: 'Mazda RX7 FC', imageUrl: 'images/mazdarx7fc.jpeg', pricePoint: 20, brand: 'Mazda', isOld: true },
    { model: 'Mazda RX7 FD', imageUrl: 'images/mazdarx7fd.jpeg', pricePoint: 50, brand: 'Mazda', isOld: true },
    { model: 'Mazda RX8', imageUrl: 'images/mazdarx8.jpeg', pricePoint: 10, brand: 'Mazda', isOld: false },
    { model: 'Mazdaspeed 3', imageUrl: 'images/mazdaspeed3.jpeg', pricePoint: 10, brand: 'Mazda', isOld: false },
    { model: 'Mazda Miata NA', imageUrl: 'images/mazdamiatana.jpeg', pricePoint: 10, brand: 'Mazda', isOld: true },
    { model: 'Mazda Miata NB', imageUrl: 'images/mazdamiatanb.jpeg', pricePoint: 10, brand: 'Mazda', isOld: true },
    { model: 'Mazda Miata NC', imageUrl: 'images/mazdamiatanc.jpeg', pricePoint: 10, brand: 'Mazda', isOld: false },
    { model: 'Mazda Miata ND', imageUrl: 'images/mazdamiatand.jpeg', pricePoint: 20, brand: 'Mazda', isOld: false },
    { model: 'Mazda B2000', imageUrl: 'images/mazdab2000.jpeg', pricePoint: 10, brand: 'Mazda', isOld: true },
    { model: 'Mazda Rotary Pickup', imageUrl: 'images/mazdarotarypickup.jpeg', pricePoint: 20, brand: 'Mazda', isOld: true },
    { model: 'Eunos Cosmo', imageUrl: 'images/mazdaeunoscosmo.jpeg', pricePoint: 30, brand: 'Mazda', isOld: true },
    { model: 'Mazda Cosmo', imageUrl: 'images/mazdacosmo.jpeg', pricePoint: 80, brand: 'Mazda', isOld: true },
    { model: 'Mazda MX6', imageUrl: 'images/mazdamx6.jpeg', pricePoint: 10, brand: 'Mazda', isOld: true },
    { model: 'Porsche 911 991 Carrera', imageUrl: 'images/porsche991carrera.jpeg', pricePoint: 100, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 991 GT2RS', imageUrl: 'images/porsche991gt2rs.jpeg', pricePoint: 400, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 991 GT3', imageUrl: 'images/porsche991gt3.jpeg', pricePoint: 200, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 991 GT3RS', imageUrl: 'images/porsche991gt3rs.jpeg', pricePoint: 250, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 991 GT3 Touring', imageUrl: 'images/porsche991gt3touring.jpeg', pricePoint: 200, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 R (991)', imageUrl: 'images/porsche991r.jpeg', pricePoint: 500, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 Speedster (991)', imageUrl: 'images/porsche991speedster.jpeg', pricePoint: 400, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 991 Targa', imageUrl: 'images/porsche991targa.jpeg', pricePoint: 100, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 991 Turbo', imageUrl: 'images/porsche991turbo.jpeg', pricePoint: 150, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 992 Carrera', imageUrl: 'images/porsche992carrera.jpeg', pricePoint: 150, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 Dakar (992)', imageUrl: 'images/porsche992dakar.jpeg', pricePoint: 400, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 992 GT3', imageUrl: 'images/porsche992gt3.jpeg', pricePoint: 250, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 992 GT3RS', imageUrl: 'images/porsche992gt3rs.jpeg', pricePoint: 400, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 992 GT3 Touring', imageUrl: 'images/porsche992gt3touring.jpeg', pricePoint: 250, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 Sport Classic (992)', imageUrl: 'images/porsche992sportclassic.jpeg', pricePoint: 400, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 S/T (992)', imageUrl: 'images/porsche992st.jpeg', pricePoint: 500, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 992 Targa', imageUrl: 'images/porsche992targa.jpeg', pricePoint: 150, brand: 'Porsche', isOld: false },
    { model: 'Porsche 911 992 Turbo', imageUrl: 'images/porsche992turbo.jpeg', pricePoint: 250, brand: 'Porsche', isOld: false }
];
