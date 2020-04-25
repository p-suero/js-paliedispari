// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//creo una funzione per capire se una parola è palindroma
function palindroma(parola)  {
    //trasformo la parola in un array (ogni lettera un valore), inverto i valori dell'array e lo ritrasformo in un'unica stringa
    var parola_reverse = parola.split("").reverse().join("");
    //esamino la condizione e restituisco un risultato per la funzione
    if (parola == parola_reverse) {
        return(true);
    } else {
        return(false);
    }
}

//chiedo all'utente di inserire una parola
var parola_utente = prompt("Inserisci una parola per verificare se è palindroma").toUpperCase();

//Dopo aver validato i dati, stampo il risultato in base a se la funzione è vera oppure no
if (isNaN(parola_utente) && parola_utente.length > 1) {
    if (palindroma(parola_utente) == true) {
        console.log("La parola " + parola_utente + " è palindroma");
    } else {
        console.log("La parola " + parola_utente + " non è palindroma");
    }
} else {
    alert("Hai inserito un valore non valido (o con carattere non maggiore di 1)");
    location.reload();
}
