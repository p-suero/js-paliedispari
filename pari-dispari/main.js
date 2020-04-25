// chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

//chiedo all'utente di scegliere un numero da 1 a 5
var numero_utente = parseInt(prompt("Scegli un numero da 1 a 5"));
//valido l'input del prompt precedente
if (isNaN(numero_utente) || numero_utente < 1 || numero_utente > 5) {
    alert("Hai inserito un numero non valido. Riprova");
    location.reload();
} else {
    //chiedo all'utente di scegliere tra pari o dispari. (Uso il lower case per rendere valido il carattere grassetto)
    var pari_dispari_utente = prompt("Scegli Pari o Dispari?").toLowerCase();
    //valido l'input precedente
    if (pari_dispari_utente != "pari" && pari_dispari_utente != "dispari") {
       alert("Hai inserito un valore diverso da pari o dispari");
       location.reload();
    } else {
        //creo una funzione che generi un numero random
        function generaRandom(min, max) {
            var numero = Math.floor(Math.random() * (max - min + 1)) + min;
            return numero;
        }

        //salvo il numero dato dalla funzione "generaRandom" in una variabile
        var numero_generato = generaRandom(1, 5);

        //creo una funzione che calcoli se un numero è pari o meno
        function is_even(numero) {
            if (numero % 2 == 0) {
                return(true);
            } else {
                return(false);
            }
        }

        //sommo il numero dato dall'utente ed il numero generato dal pc (attravero la funzione)
        var somma = numero_utente + numero_generato;

        //stampo le informazioni
        console.log("Hai scelto: " + pari_dispari_utente.toUpperCase());
        console.log("Hai inserito: " + numero_utente);
        console.log("Il PC ha scelto = " + numero_generato);
        console.log("SOMMA = " + somma);

        //stampo il risultato del mini-gioco quando si verifica una delle seguneti condizioni
         if (is_even(somma) == true && pari_dispari_utente == "pari")  {
            console.log("Hai vinto. La somma dei numeri " + numero_utente + " + " + numero_generato +  " è pari");
        } else if (is_even(somma) == false && pari_dispari_utente == "dispari")  {
            console.log("Hai vinto. La somma dei numeri " + numero_utente + " + " + numero_generato +  " è dispari");
        } else if (is_even(somma) == true && pari_dispari_utente == "dispari") {
            console.log("Hai perso. La somma dei numeri " + numero_utente + " + " + numero_generato +  " è pari");
        } else {
            console.log("Hai perso. La somma dei numeri " + numero_utente + " + " + numero_generato +  " è dispari");
        }
    }
}
