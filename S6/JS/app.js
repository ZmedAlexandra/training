/* 
multi line comment in javascript
*/

// single line comment (se poate pune deasupra de linie sau dupa linie)

var training = "Sunt un var"; //definire de variabila-nu se pot pune - sau caractere speciale - nu se foloseste(recomandare)
let training_two = "Sunt un let"; // valoarea variabilei se poate schimba in viitor. poate fi initializat fara valoare
const trainingThree = "Sunt un const"; // valoarea valiabilei nu se schimba in viitor

console.log("Up and running!");

console.log(9);
console.log(training);
//console.log se foloseste doar la debbuging

console.log(5 + 5); //va printa in consola 10 - adunare
console.log("5" + 5); //va printa 55 - concatenare

console.log("training_two BEFORE:", training_two);
training_two = 2023;
console.log("training_two AFTER:", training_two);

console.log("trainingThree BEFORE:", trainingThree);
// trainingThree = false; // va produce eroare de assigment to constant variable
console.log("trainingThree AFTER:", trainingThree);

// primitivele din js sunt: number, boolean si string

// "5" == 5 Va returna true pt ca js le va face de acelasi type - NU FOLOSIM
// "5" === 5 va returna false pt ca js verifica daca sunt acelasi data type si aceasi valoare

// PT ACASA!!!! csrieti in consola si studiati proto
// "".__proto__
//false.__proto__
//5.__proto__

let variabila;
console.log("let gol: ", variabila); // va returna let gol: undefined pt ca variabila exista dar nu are valoare- undefined este tot o primitiva pt tipul de date string
//null este primitiva pt tipul de date number ( face acelasi lucru ca undefined)

const arrayUnu = ["1", "2", "3"];
const arrayDoi = [1, 2, 3];
const matrix = [
  [1, 2],
  [3, 4],
];

const bonFiscal = [
  ["produs", "cantitate", "pretu unitar"],
  ["paine", 6, 1.99],
  ["zahar", 3, 4.99],
];
//printam in consola "1" din arrayUnu
console.log(arrayUnu[0]); //da-mi primul element din arrayUnu
//printam in consola "2" din arrayUnu
console.log(arrayUnu[1]); //da-mi al doilea element din arrayUnu
//printam in consola "3" din arrayUnu
console.log(arrayUnu[2]); //da-mi al trilea element din arrayUnu

//concatenare de strings
console.log("Paine total: ", bonFiscal[1][1] * bonFiscal[1][2]); //bonFiscal[1][1] reprezinta valoare din array bonFiscal de pe linia 2-a doua valoare

//template strings

console.log(`Zahar total: ${bonFiscal[2][1] * bonFiscal[2][2]}`);

// OBIECTELE

const obj = {};

const loginData = {
  email: "alexandra26dan@gmail.com",
  password: "qr1234",
};

const account = {
  token: "JWT Token",
  accountDetails: {
    firstName: "Alexandra",
    lastName: "Zmed",
    profileImage: "https://source.unsplash.com/30x30",
  },
  roles: ["admin", "collaborator"],
  MFAenabled: true,
  accountLevelAcces: 3,
};

console.log(`Token: ${account.token}`); //asa se apeleaza un anume camp din obiectul mare
console.log(`First name: ${account.accountDetails.firstName}`);
console.log(`First role: ${account.roles[0]}`);

const firstArticle = {
  meta: {
    title: "Titlu pagina + titlu din share",
    description:
      "descrierea de pe google search sau cand dau share pe social media",
    image: "url absolut al imaginii",
  },
  title: "Titlu articol",
  author: {
    name: "Zmed Alexandra",
    job: "Front-end developer",
  },
  content: "<h1>HI</h1><p>Text</p>",
  categories: ["article", "blog"],
  publishDate: 123456789,
  published: false,
};

const secondArticle = {
  meta: {
    title: "Titlu pagina + titlu din share",
    description:
      "descrierea de pe google search sau cand dau share pe social media",
    image: "url absolut al imaginii",
  },
  title: "Titlu articol",
  author: {
    name: "Zmed Alexandra",
    job: "Front-end developer",
  },
  content: "<h1>HI</h1><p>Text</p>",
  categories: ["article", "blog"],
  publishDate: 123456789,
  published: false,
};

//obiectele sunt immutable - NU SCHIMBATI VALOAREA UNUI KEY DIN OBIECT!!

//COPIEZ OBIECTUL
const thirdArticle = {
  ...secondArticle, // spread operator
  publishDate: new Date(secondArticle.publishDate),
};

console.log(thirdArticle);

//OBJECT DESTRUCTURING

const { meta, author } = firstArticle;
console.log(meta, author);

//creez un obiect din alte obiecte

const allArticlesObject = {
  firstArticle: firstArticle,
  secondArticle: secondArticle,
  thirdArticle, //daca numele de key este identic cu numele variabilei, punem doar key
};

console.log(allArticlesObject);

//creez un array cu toate obiectele

const allArticles = [firstArticle, secondArticle, thirdArticle];

console.log(allArticles);
