//Potrzebne zmienne
let counter = 0

//Pobieramy potrzebne elementy strony
const spanCounter = document.querySelector('span')
const btn1 = document.querySelector('button:nth-of-type(1)')
const btn2 = document.querySelector('button:nth-of-type(2)')

//Nasłuchiwanie na zdarzenie + określenie akcji w funkcji
btn1.addEventListener('click', function () {
	counter = counter + 1
	// console.log(counter);
	spanCounter.textContent = counter
})
btn2.addEventListener('click', function () {
	counter = counter - 1
	spanCounter.textContent = counter
})
