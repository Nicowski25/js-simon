//creo un array vuoto dove inserisco 5 numeri casuali
let randomNumbers = []

//creo la funzione random che genera numeri random
function random(array) {
    const numberVisualizer = document.getElementById('displaynumber')
    while (array.length < 5) {
        const numberRand = Math.floor(Math.random() * 100) 
        console.log(numberRand);
        array.push(numberRand)
        numberVisualizer.innerHTML += `<div class="number">${numberRand}</div>`
    }
}

//prendo dalla DOM il bottone di start
const startButton = document.getElementById('start')
//al click del bottone creo i 5 numeri random
startButton.addEventListener('click', function() {
    random(randomNumbers)
    console.log(randomNumbers);
})

