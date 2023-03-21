//creo un array vuoto dove inserisco 5 numeri casuali
//creo la funzione che genera numeri random
let randomNumbers = []
function randomNumberGenerator(arrayNumeri) {
    const numberVisualizer = document.getElementById('displaynumber')
    while (arrayNumeri.length < 5) {
        const numberRand = Math.floor(Math.random() * 100) 
        console.log(numberRand);
        arrayNumeri.push(numberRand)
        numberVisualizer.innerHTML += `<div class="number">${numberRand}</div>`
    }
}

//creo la funzione che inserisce la classe d-none
function displayNone(queryName) {
    let numbers = document.querySelectorAll(queryName)
    console.log(numbers);
    for(var i = 0; i < numbers.length; i++) {
        numbers[i].classList.add('d-none');
    }
}

//creo la funzione di input dell'utente
let userNumbers = []
function inputUser() {
    for (let i = 0; i < randomNumbers.length; i++) {
        let inputNumber = Number(prompt('inserisci il numero che ti ricordi'))
        userNumbers.push(inputNumber)
    }
    console.log(userNumbers);
}

//creo la funzione di check tra i numeri inseriti dall'utente e i numeri random
function checkIfEqual(firstArray, secondArray) {
    let i = 0
    let x = 0
    let y = 0
    const numberVisualizer = document.getElementById('displaynumber')
    while(i < firstArray.length) {
        console.log(secondArray[i]);
        if (firstArray.includes(secondArray[i])) {
            console.log(`hai indovinato il numero ${secondArray[i]}`);
            numberVisualizer.innerHTML += `hai indovinato il numero ${secondArray[i]} <br>`
            x ++
        } else {
            console.log('non è presente');
            y ++
        }
        i++
    }
    console.log(`Numeri indovinati: ${x}`);
    console.log(`hai sbagliato ${y} volte`);
    numberVisualizer.innerHTML += `Hai indovinato ${x} numeri!`
}

//prendo dalla DOM il bottone di start
const startButton = document.getElementById('start')
//al click del bottone creo i 5 numeri random
startButton.addEventListener('click', function() {
    randomNumberGenerator(randomNumbers);
    console.log(randomNumbers);
    //displayNone('.number');
    setTimeout(function(){
        displayNone('.number');
        inputUser();
        checkIfEqual(randomNumbers, userNumbers)
    }, 5000);
})






