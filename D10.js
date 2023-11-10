/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let a = 10
let b = 20
let sum = a + b;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = [
  Name = "Francesco",
  surname = "Caputo",
  age = 30
]
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/ 
me.pop();
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Html", "Css", "Javascript"];
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Python");
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me)
// Funzioni


/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice(){
  let randomNumber = Math.floor(Math.random()*6) +1;
  return randomNumber;
}
let risultato = dice();
console.log(risultato);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
// function whoIsBigger() {
//   let numero1 = prompt("inserisci il primo numero");
//   let numero2 = prompt("inserisci il secondo numero");

//   numero1 = parseFloat(numero1);
//   numero2 = parseFloat(numero2);
  
//   if (isNaN(numero1) || isNaN(numero2)) {
//     return "Inserisci numeri";
//   }
//   if (numero1 > numero2) {
//     return "Il numero più grande è" + numero1;
//   }
//   else if (numero2 > numero1) {
//     return "Il numero più grande è" + numero2;
//   }
//   else {
//     return "I numeri sono uguali";
//   }
// }
// let risultato2 = whoIsBigger();
// console.log(risultato2)

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, eliminaInizio) {
  if (eliminaInizio === true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}
let risultato1 = deleteOne("example", true);
let risultato2 = deleteOne("example", false);

console.log("Senza il primo carattere:", risultato1);
console.log("Senza l'ultimo carattere:", risultato2);


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  let stringaSenzaNumeri = stringa.replace(/\d/g, '');

  return stringaSenzaNumeri;
}

let risultato4 = onlyLetters("I have 4 dogs");

console.log("Stringa senza numeri:", risultato);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(stringa) {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regexEmail.test(stringa);
}

console.log(isThisAnEmail("example@email.com")); 
console.log(isThisAnEmail("invalidemail@.com"));


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let today = new Date();

  let numeroGiorno = today.getDay();

  let giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  return giorniSettimana[numeroGiorno];
}

let giornoCorrente = whatDayIsIt();
console.log("Oggi è " + giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(data) {
  let oggi = new Date();

  let dataInserita = new Date(data);

  let differenzaInMillisecondi = oggi - dataInserita;

  let differenzaInGiorni = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));

  return differenzaInGiorni;
}

let dataIniziale = "2022-11-10";
let giorniTrascorsi = howManyDays(dataIniziale);
console.log("Giorni trascorsi da " + dataIniziale + ": " + giorniTrascorsi + " giorni");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const today = new Date();

  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1; 

  const birthdayDay = 14;
  const birthdayMonth = 1;

  return currentDay === birthdayDay && currentMonth === birthdayMonth;
}


const result = isTodayMyBirthday();
console.log(result);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }

  return obj;
}

const myObject = {
  name: "Giovanni",
  age: 30,
  city: "Milano"
};

const modifiedObject = deleteProp(myObject, "age");

console.log(modifiedObject);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  const containerElement = document.getElementById("container");
  return containerElement;
}
const container = selectContainerElement();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTdElements() {
  const tdElements = document.querySelectorAll("td");

  return tdElements;
}
const tdElements = selectAllTdElements();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function testostampato() {
  const tdElements = selectAllTdElements();

  for (const tdElement of tdElements) {
    console.log(tdElement.textContent);
  }
}
testostampato();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function backgroundColorLink() {
  const linkElements = document.querySelectorAll("a");

  for (const linkElement of linkElements) {
    linkElement.style.backgroundColor = "red";
  }
}
backgroundColorLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function newElementTomyList() {
  const newListItem = document.createElement("li");
  newListItem.textContent = "Nuovo elemento";
  const myList = document.getElementById("myList");
  myList.appendChild(newListItem);
}
newElementTomyList()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  const myList = document.getElementById("myList");

  myList.innerHTML = '';
}

clearList();

/* ESERCIZIO 26
*/
function addClassToRows() {
  const trElements = document.querySelectorAll("tr");

  for (const trElement of trElements) {
    trElement.classList.add("test");
  }
}
addClassToRows();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// esercizio 13
function countMovies(movies) {
  return movies.length;
}
const numberOfMovies = countMovies(movies);
console.log(numberOfMovies);
// esercizio 14
function onlyTheYears(movies) {
  const yearsArray = movies.map(movie => parseInt(movie.Year));

  return yearsArray;
}
const yearsOfMovies = onlyTheYears(movies);
console.log(yearsOfMovies);


// esercizio 15
function onlyInLastMillennium(movies) {
  const currentYear = new Date().getFullYear();

  const lastMillenniumMovies = movies.filter(movie => {
    const movieYear = parseInt(movie.Year);
    return movieYear >= 1000 && movieYear <= (currentYear - 1);
  });

  return lastMillenniumMovies;
}
const moviesLastMillennium = onlyInLastMillennium(movies);
console.log(moviesLastMillennium);

// esercizio 16 
function sumAllTheYears(movies) {
  const totalYears = movies.reduce((accumulator, movie) => {
    const movieYear = parseInt(movie.Year);
    return accumulator + movieYear;
  }, 0);

  return totalYears;
}
const totalYearsSum = sumAllTheYears(movies);
console.log(totalYearsSum);

// esercizio 17 
function searchByTitle(searchString, movies) {
  const matchingMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(searchString.toLowerCase())
  );

  return matchingMovies;
}
const searchTerm = "Lord";
const matchingMovies = searchByTitle(searchTerm, movies);
console.log(matchingMovies);

// esercizio 18

// esercizio 19 

function removeIndex(index, movies) {
  if (index >= 0 && index < movies.length) {
    const updatedMovies = [...movies.slice(0, index), ...movies.slice(index + 1)];
    return updatedMovies;
  } else {
    return movies;
  }
}

const indexToRemove = 2;
const moviesWithoutIndex = removeIndex(indexToRemove, movies);
console.log(moviesWithoutIndex);


