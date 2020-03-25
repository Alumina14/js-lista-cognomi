// js
// Chiedi all’utente il cognome, inseriscilo in un array
// con altri cognomi e stampa la lista ordinata
// alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo
// utente si trova


// chiedere all'utente con prompt il cognome da inserire con una variabile in un
// array precedentemente creato...

var listaCognomi = ["Arrigo", "Zefiro", "Cica", "Rubino", "Rossi"];
var listaCognomiOrd, itemLi, precedenteLi, posizione;
console.log(listaCognomi);

var cognomeUtente = prompt("Inserisci il tuo cognome con la prima lettera MAIUSCOLA: ");

listaCognomi.push(cognomeUtente);

listaCognomiOrd = listaCognomi.sort();

console.log(listaCognomiOrd);

for (var i = 0; i < listaCognomiOrd.length; i++) {
  itemLi = listaCognomiOrd[i];
  precedenteLi = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML= precedenteLi + "<li>" + itemLi + "</li>" ;

}

posizione = (listaCognomiOrd.indexOf(cognomeUtente)) + 1;
document.getElementById('posizione').innerHTML = "Il cognome inserito è alla posizione numero: " + posizione;
