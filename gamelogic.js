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
    document.getElementById('sf' + (semiFinalNum/2)).innerText = document.getElementById('car' + iter).innerText;
    document.getElementById('sfImage' + (semiFinalNum/2)).src = document.getElementById('carImage' + iter).src;
    if(!isOdd){
        displayCurrentMatch(iter+1);
    }
    else{
        displayCurrentMatch(iter+2);
    }
}

function switchToSemiFinals(iter){

    carsNum = carsNum/2;
    semiFinalsDone = true;
    for(let i=1; i<=carsNum; i++){

        // remove car ids
        document.getElementById('car' + i).id = 'USELESS' + i;
        document.getElementById('carImage' + i).id = 'USELESSIMAGE' + i;

        // replace semifinal ids with regular car ids
        document.getElementById('sf' + i).id = 'car' + i;
        document.getElementById('sfImage' + i).id = 'carImage' + i;

        // replace final ids with semifinal ids
        if(i <= 2){
            document.getElementById('f' + i).id = 'sf' + i;
            document.getElementById('fImage' + i).id = 'sfImage' + i;
        }

    }

    displayCurrentMatch(iter);

}

function switchToFinal(){

    // display current match (final)
    document.getElementById('current1').innerText = document.getElementById('sf1').innerText;
    document.getElementById('current2').innerText = document.getElementById('sf2').innerText;
    document.getElementById('currentImage1').src = document.getElementById('sfImage1').src;
    document.getElementById('currentImage2').src = document.getElementById('sfImage2').src;

    const element1 = document.getElementById('button1');
    const element2 = document.getElementById('button2');

    // Remove existing event listeners to prevent duplicates
    element1.replaceWith(element1.cloneNode(true));
    element2.replaceWith(element2.cloneNode(true));

    // Re-assign the elements due to cloning
    const newElement1 = document.getElementById('button1');
    const newElement2 = document.getElementById('button2');

    newElement1.addEventListener('click', function() {
        document.getElementById('winner').innerText = document.getElementById('sf1').innerText;
        document.getElementById('winnerImage').src = document.getElementById('sfImage1').src;
    });
    newElement2.addEventListener('click', function() {
        document.getElementById('winner').innerText = document.getElementById('sf2').innerText;
        document.getElementById('winnerImage').src = document.getElementById('sfImage2').src;
    });

    // Make buttons disappear to showcase winner?

}