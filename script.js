let count = 0;

let countDisplay = document.getElementById('count');

document.getElementById('increament').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
})

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
})

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
})

