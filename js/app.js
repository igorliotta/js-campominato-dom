console.log('CAMPO MINATO');

const gridElement = document.querySelector('.grid');
console.log(gridElement);

const btnPlayElement = document.getElementById('btn-play');
console.log(btnPlayElement);

btnPlayElement.addEventListener('click', function () {
    // Serve per svuotare la griglia
    gridElement.innerHTML = '';

    getArrayOfIntRandomNumber();

    // Serve a generare le caselle all'interno della griglia
    for (let i = 0; i < 100; i++) {
        n = i + 1;
        console.log(n);
    
        const htmlBox = '<div class="box">' + n + '</div>';

        // console.log(htmlBox);
    
        gridElement.innerHTML = gridElement.innerHTML + htmlBox;
    }

    // Recuperiamo tutte le caselle che abbiamo creato nel precedente ciclo
   const boxDOMElements = document.querySelectorAll('.box');
   console.log(boxDOMElements);
   
    //Cicliamo la nodelist dei box    
   for (let i = 0; i < boxDOMElements.length; i++) {
        const currentBoxElement = boxDOMElements[i];
        // console.log(currentBoxElement);

        // Ad ogni box aggiungo un eventListner
        currentBoxElement.addEventListener('click', function() {

            // Stampo il riferimento al numero del box cliccato
            console.log('Ho cliccato nella casella numero: ' + [i + 1]);

            currentBoxElement.classList.add('bg-light-blue');
        })
    }


})

let bombs = getArrayOfIntRandomNumber(16);

function getArrayOfIntRandomNumber() {
   
    const bombsArray = [];
    console.log("getArrayOfIntRandomNumber > Empty bombs array", bombsArray);

    while (bombsArray.length < 16) {

        const number = getRandomIntInclusive(1, 100);
        console.log(bombsArray.includes(number));

        if (bombsArray.includes(number) === false) {
            bombsArray.push(number);
        }
    }

    console.log("Full bombs array", bombsArray);
    return bombsArray;
}

for (let i = 0; i < bombs.length; i++) {
    // console.log(bombs[i]);

    const bombElement = bombs[i];
    console.log(bombElement);

    // bombElement.addEventListener('click', function () {
    //     bombElement.classList.add('red');
    // })

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}





