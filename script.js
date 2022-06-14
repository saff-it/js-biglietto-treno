
// Variabili
let userDistance = parseInt( prompt ('Quanti Kilometri intendi percorrere?') );
const userAge = parseInt( prompt ('Quanti anni hai?') );
const ticketPrice = userDistance * 0.21;
console.log(userDistance, userAge, ticketPrice);

// Document
document.getElementById('user-distance').innerHTML = userDistance;
document.getElementById('user-age').innerHTML = userAge;
document.getElementById('ticket-price').innerHTML = ticketPrice;

