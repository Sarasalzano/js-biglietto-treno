/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
100km audlto =>21
*/

//INPUT
//stabilisci età
let userAge = 18 

//numero km 
let km = 1

//prezzo equivalente di un km
let priceKm = 0.21

//discount di base
let discount = 0

//ELABORAZIONE
//chiedo user il numero di km che vuole percorrere
const userKm = parseInt(prompt("Inserisci i km che desideri percorrere"))

//chiedo user la sua età
userAge = parseInt(prompt("Inserisci la tua età"))
console.log(userKm, userAge)

//calcolo prezzo totale per adulti
let totalPrice = (priceKm * userKm) 
console.log(totalPrice)

//calcolo prezzo per minorenni e senior
if (userAge < 18) {
discount = 20;
}

else if (userAge > 65) {
discount = 40;
}

