
// Variabili
let userDistance = parseInt( prompt ('Quanti Kilometri intendi percorrere?') );
const userAge = parseInt( prompt ('Quanti anni hai?') );
const ticketPrice = userDistance * 0.21;
const ticketUnderAge = ticketPrice - ( (ticketPrice * 20) / 100);
const ticketElderly = ticketPrice - ( (ticketPrice * 40) / 100);
console.log(userDistance, userAge, ticketPrice, ticketUnderAge, ticketElderly);

// Document
document.getElementById('user-distance').innerHTML = userDistance;
document.getElementById('user-age').innerHTML = userAge;
document.getElementById('ticket-price').innerHTML = ticketPrice;

// Conditions

if ( isNaN(userDistance) == true ) {
    console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero di KM che intendi percorrere');

} else if ( isNaN(userAge) == true ) {
    console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero dei tuoi anni');

} else {

    if (userAge < 18) {
        document.getElementById('ticket-price').innerHTML = ticketUnderAge;
        
    } else if (userAge > 65) {
        document.getElementById('ticket-price').innerHTML = ticketElderly;
    }
}    