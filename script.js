
// Variabili
let userDistance = parseInt( prompt ('Quanti Kilometri intendi percorrere?') );
const userAge = parseInt( prompt ('Quanti anni hai?') );
let ticketPrice = userDistance * 0.21;

console.log(userDistance, userAge, ticketPrice);

// Document
document.getElementById('user-distance').innerHTML = userDistance;
document.getElementById('user-age').innerHTML = userAge;


// Conditions

if ( isNaN(userDistance) == true ) {
    console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero di KM che intendi percorrere');

} else if ( isNaN(userAge) == true ) {
    console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero dei tuoi anni');

} else {

    if (userAge < 18) {
        ticketPrice = (ticketPrice - ( (ticketPrice * 20) / 100) ).toFixed( 2 );
        
        
    } else if (userAge > 65) {
        ticketPrice = (ticketPrice - ( (ticketPrice * 40) / 100) ).toFixed( 2 );
    }
}    

document.getElementById('ticket-price').innerHTML = ticketPrice;