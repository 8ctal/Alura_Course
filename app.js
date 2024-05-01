// ! DOM VARIABLES

const ulList = document.createElement('ul');
document.body.appendChild(ulList);
let li = document.createElement('li');
li.textContent = 'Razon 1';
ulList.appendChild(li);

// CURSO

let tries = 1;
let number = generateNumber();
console.log(number);

// * Functions
function assingText(element, text) {
    document.querySelector(element).textContent = text;
    return;
}
function generateNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
function userTry() {
    const userNumber = parseInt(document.querySelector('.container__input').value);
    if (userNumber == number) {
        assingText('h1', 'Adivinaste el numero');
        assingText('.texto__parrafo', `El numero era ${number}, lo hiciste en ${tries} ${tries == 1 ? 'intento' : 'intentos'}`);
        document.querySelector('.container__input').value = '';
        tries = 1;
        number = generateNumber();
        return;
    } else {
        assingText('h1', 'No adivinaste el numero');
        assingText('.texto__parrafo', `Intentos: ${tries}`);
        document.querySelector('.container__input').value = '';
        tries++;
        return;
    }
}

function reset() {
    console.log(document.querySelector('.container__input').value);
    document.querySelector('.container__input').value = '';
    assingText('h1', 'Adivina el numero');
    assingText('.texto__parrafo', 'Escribe un numero del 1 al 10');
    tries = 1;
    number = generateNumber();
    console.log(number);
    return;
}
assingText('h1', 'Adivina el numero');   
assingText('.texto__parrafo', 'Escribe un numero del 1 al 10');

// async function getNumber() {
//     const number = Math.floor(Math.random() * 10) + 1;
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`);
//     const data = await response.json();
//     console.log(data);
//     document.querySelector('.container__input').value = data.title;
// }


// TODO Crear elementos
// document.querySelector('button').addEventListener('click', () => {
//     const li2 = document.createElement('li');
//     li2.textContent = 'Razon 2';
//     ulList.appendChild(li2);
// });

// const razones = document.querySelectorAll('li');
// razones.forEach(razon => {
//     console.log(razon.textContent);
// });

// const listItems = document.querySelectorAll('li');
// listItems.forEach(listItem => {
//     listItem.addEventListener('click', e => {
//         console.log(e.target.textContent);
//     });
// });
