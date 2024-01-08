const asusLaptop = {
  id: "qwer-1234",
  categories: ["laptop"],
  name: "laptop asus",
  imgage: "url relativ",
  price: {
    original: 1899.99,
    discountedPrice: 1849.99,
    rate: 12,
    otherDiscounts: [
      {
        provider: "flip",
        discount: 50,
      },
    ],
    seller: {
      name: "eMag",
      link: "/seller/eMag",
    },
  },
  configurations: {
    "alege tip procesor": [
      {
        label: "i3",
        link: "products/laptops/nume-laptop-i3",
        isAvailable: true,
      },
      {
        label: "i5",
        link: "products/laptops/nume-laptop-i5",
        isAvailable: false,
      },
    ],
    "Alege capacitate memorie": [
      {
        label: "8Gb",
        link: "products/laptops/nume-laptop-8Gb",
        isAvailable: true,
      },
      {
        label: "16Gb",
        link: "products/laptops/nume-laptop-16Gb",
        isAvailable: false,
      },
    ],
  },
};

const appleLaptop = {
  id: "qwer-1234",
  categories: ["laptop"],
  name: "MacBook Pro",
  price: {
    original: 6199.99,
    discountedPrice: 6189.99,
    rate: 6,
    otherDiscounts: [],
    seller: {
      name: "Apple",
      link: "/seller/Apple",
    },
  },
  configurations: {
    "alege tip procesor": [
      {
        label: "M1",
        link: "products/laptops/nume-laptop-m1",
        isAvailable: true,
      },
      {
        label: "M1 Max",
        link: "products/laptops/nume-laptop-m1-max",
        isAvailable: false,
      },
    ],
    "Alege capacitate memorie": [
      {
        label: "16Gb",
        link: "products/laptops/nume-laptop-16Gb",
        isAvailable: false,
      },
      {
        label: "32Gb",
        link: "products/laptops/nume-laptop-32Gb",
        isAvailable: true,
      },
    ],
  },
};

const products = [asusLaptop, appleLaptop, asusLaptop, appleLaptop];

// functions are hoisted=js face 2 ture in cod,
// prima tura alocare de resurse a doua tura trece prin cod si il executa
zmedAlexandra();

function zmedAlexandra() {
  console.log("Executat");
}

// executia funtiei
zmedAlexandra();

// text poate fi folosit doar in interiorul functiei
function zmedAlexandraTwo(text) {
  console.log(text);
}

function zmedAlexandraThree(number, text) {
  console.log(number, text);
}

// functionOne();
// arrow functions are NOT hoisted

const functionOne = () => {
  console.log("arrow function one");
};

const functionTwo = (arg1) => {
  console.log(arg1);
};

function handleCalculateProductDiscount(product) {
  const { price } = product;

  const discountValue = price.original - price.discountedPrice;

  return discountValue;
}

console.log(handleCalculateProductDiscount(asusLaptop));

function handleCalculateProductDiscount(product) {
  const { price } = product;

  const discountValue = price.original - price.discountedPrice;

  return discountValue;
}

console.log(handleCalculateProductDiscount(appleLaptop));

function handleCalculateRata(product) {
  const { price } = product;
  const rata = price.discountedPrice / price.rate;
  return rata.toFixed(2);
}

// console.log(handleCalculateRata(appleLaptop));
// console.log(handleCalculateRata(asusLaptop));
products.forEach((p) => console.log(handleCalculateProductDiscount(p)));

function handleGenerateProductCard(product) {
  document.body.innerHTML += `
    <h1>${product.name}</h1>
    <p class="line-through">${product.price.original}</p>
    <p class="font-bold">${product.price.discountedPrice}</p>
    <P> Sau il poti achizitiona in ${
      product.price.rate
    } rate de ${handleCalculateRata(product)} lei pe luna</p>
    <p>${
      product.configurations["alege tip procesor"][0].isAvailable
        ? "in stoc"
        : "indisponibil"
    } </p>
    `;
}

handleGenerateProductCard(asusLaptop);
handleGenerateProductCard(appleLaptop);

function checkIfPozitiveNumber(number) {
  if (typeof number !== "number") {
    return "Argument error: expected number, got " + typeof number;
  }

  if (number > 0) {
    // retrurn te scoate din functie
    return "pozitive number";
  }

  if (number < 0) {
    return "negative number";
  }

  return "number is zero";
}

console.log(checkIfPozitiveNumber(1));
console.log(checkIfPozitiveNumber(0));
console.log(checkIfPozitiveNumber(-1));
console.log(checkIfPozitiveNumber("zmed"));
console.log(checkIfPozitiveNumber(true));
console.log(checkIfPozitiveNumber({}));

//   if (condition){
//     true
//   } else{
//     false
//   }

//   sus = jos

//   condition ? true  : false

const isAdmin = true;
const isAccountConfirmed = true;
document.body.innerHTML +=
  isAdmin && isAccountConfirmed
    ? `<p>All good </p>`
    : `<p>Verification failed!<p/>`;

document.body.innerHTML += isAdmin
  ? `<h1> Welcome Administrator</h1>`
  : `<h1>Admin requiered </h1>`;

const account = {
  firstName: "Alexandra",
  lastName: "Zmed",
  accountConfirmed: false,
  accountType: "user",
  isAdmin: false,
};

document.body.innerHTML +=
  (account.accountType === "buyer" || account.isAdmin) && `session valid`;

// echivalentul ternary de mai sus :
// if (account.accountType === "buyer" || account.isAdmin) { `session valid`}

// cea mai eficienta varianta - nu prea se foloseste in react

for (let i = 0; i < products.length; i++) {
  handleGenerateProductCard(products[i]);
}

// products.forEach((p) => "zmed");

// forEach nu returneaza nimic, doar trece prin elemente
// forEach merge doar la array and string
products.forEach((product, index) => {
  document.body.innerHTML += `
  <div class="flex px-4 py-2 shaddow-lg mb-4" key="${index}">${product.name}</div?
  `;
});
const myString = "what the hell";
myString.split("").forEach((letter) => console.log(letter));

// map returneaza valoarea obtinuta in fiecare iteratie
products.map((p) => {
  document.body.innerHTML += `
  <div class="flex px-4 py-2 shaddow-lg mb-4 text-sky-500" key="${p.id}">${p.name}</div?
  `;
});

// filter va returna un array nou doar cu elementele care indeplinesc conditia
const filteredProducts = products.filter((p) => p.price.discountedPrice < 3000);
console.log("filter", filteredProducts);

//find returneaza primul element din array care indeplineste conditia. DOAR PRIMUL
const foundProduct = products.find((p) => p.name === "laptop asus");
console.log("find", foundProduct);

//returneaza true/false daca conditia este indeplinita sau nu
const someProducts = products.some((p) => p.name === "nu exista");
console.log("some", someProducts);

const cities = {
  timisoara: "Timisoara",
  arad: "Arad",
  bucuresti: "Bucuresti",
  cluj: "Cluj",
};
const people = [
  {
    name: "ceva",
    city: "Timisoara",
  },
  {
    name: "ceva",
    city: "Arad",
  },
  {
    name: "ceva",
    city: "Bucuresti",
  },
  {
    name: "ceva",
    city: "Cluj",
  },
];

// switch nu poate fi folosit in react
function getPersonTownship(person) {
  switch (person.city) {
    case cities.timisoara:
      return "Timisoarea";
    case cities.arad:
      return "Aradean";
    case cities.bucuresti:
      return "Bucurestean";
    case cities.cluj:
      return "Arogant";

    default:
      return "N/A";
  }
}

people.map((p) => console.log(getPersonTownship(p)));

//returneaza un array cu toate mainlevel keys din obiect ( adica daca avem un array in obiect, ne returneaza doar numele lui nu si valorile din array)
console.log(Object.keys(asusLaptop));

Object.keys(asusLaptop.configurations).forEach((k) =>
  console.log(`${k}: ${asusLaptop.configurations[k].map((c) => c.label)}`)
);

