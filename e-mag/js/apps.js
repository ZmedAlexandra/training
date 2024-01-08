const asusLaptop = {
  id: "qwer-1234",
  categories: ["laptop"],
  name: 'Laptop Gaming ASUS TUF F15 FX506HC cu procesor Intel® Core™ i5-11400H pana la 4.50 GHz, 15.6", Full HD, IPS, 144Hz, 8GB, 1TB SSD, NVIDIA® GeForce RTX™ 3050 4GB, No OS TGP 75W, Graphite Black',
  image: "images/laptop_gaming_asus.webp",
  price: {
    original: 3799.99,
    discountedPrice: 3399.99,
    rate: 18,
    otherDiscounts: [
      {
        provider: "Flip",
        discount: 50,
      },
    ],
    seller: {
      name: "eMAG",
      link: "/seller/eMag",
    },
  },
  configurations: {
    "Alege tip procesor": [
      {
        label: "i5",
        link: "products/laptops/nume-laptop-i5",
        isAvaliable: true,
      },
      {
        label: "i7",
        link: "products/laptops/nume-laptop-i7",
        isAvailable: false,
      },
    ],
    "Alege capacitate memorie": [
      {
        label: "8GB",
        link: "products/laptops/nume-laptop-8Gb",
        isAvailable: true,
      },
      {
        label: "16GB",
        link: "products/laptops/nume-laptop-16Gb",
        isAvailable: false,
      },
    ],
  },
};

const appleLaptop = {
  id: "qwer-1234",
  categories: ["laptop"],
  name: "Laptop Apple MacBook Air 13-inch, True Tone, procesor Apple M1 , 8 nuclee CPU si 7 nuclee GPU, 8GB, 256GB, Space Grey, INT KB ",
  image: "images/apple_laptop.jpg",
  price: {
    original: 7349.99,
    discountedPrice: 5999.99,
    rate: 20,
    otherDiscounts: [
      {
        provider: "Flip",
        discount: 60,
      },
    ],
    seller: {
      name: " eMAG",
      link: "/seller/Apple",
    },
  },
  configurations: {
    "Alege tip procesor": [
      {
        label: "M1",
        link: "products/laptops/nume-laptop-m1",
        isAvaliable: true,
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

const products = [asusLaptop, appleLaptop];

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

function handlePercentage(product) {
  const { price } = product;
  const discountValue = price.original - price.discountedPrice;
  const percentage = (100 * discountValue) / price.original;
  return percentage.toFixed();
}

console.log(handleCalculateRata(appleLaptop));
console.log(handleCalculateRata(asusLaptop));

// function handleGenerateProductCard(product) {
//   document.body.innerHTML += `
//     <h1>${product.name}</h1>
//     <p class="line-through">${product.price.original}</p>
//     <p class="font-bold">${product.price.discountedPrice}</p>
//     <P> Sau il poti achizitiona in ${
//       product.price.rate
//     } rate de ${handleCalculateRata(product)} lei pe luna</p>
//     `;
// }

function handleGenerateProductCard(product) {
  document.body.innerHTML += `<div class="w-full flex flex-col px-4 bg-[#eaeaea] py-20">
  <div class="flex flex-wrap -mx-4">
    <div
      class="w-full max-w-7xl flex flex-col px-4 shadow-md mx-auto bg-[#fafafa] rounded"
    >
      <div class="flex flex-wrap -mx-4">
        <div class="flex-1 px-4 pt-4">
          <h1 class="text-xl mb-1 leading-tight">
            ${product.name}
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="flex w-1/3 p-10 mb-4">
        <img src="${product.image}" />
        </div>
        <div class="flex-1 w-1/3 px-4">
          <p class="text-base text-[#222222] mb-1 leading-normal pt-10">
            Alege Tip procesor:
          </p>
          <ul class="py-4 flex gap-2 mb-4">
            <li
              class="border-solid border-2 py-2 px-3 rounded-full bg-black text-white font-sm leading-5"
            >
            ${product.configurations["Alege tip procesor"][0].label}
            </li>
            <li
              class="border-solid border-2 py-2 px-3 rounded-full bg-gray font-sm leading-5"
            >
            ${product.configurations["Alege tip procesor"][1].label}
            </li>
          </ul>
          <p class="text-base text-[#222222] mb-1 leading-normal">
            Alege Capacitate memorie:
          </p>
          <ul class="py-4 flex gap-2">
            <li
              class="border-solid border-2 py-2 px-3 rounded-full bg-black text-white font-sm leading-5"
            >
            ${product.configurations["Alege capacitate memorie"][0].label}
            </li>
            <li
              class="border-solid border-2 py-2 px-3 rounded-full bg-gray font-sm leading-5"
            >
            ${product.configurations["Alege capacitate memorie"][1].label}
            </li>
          </ul>
        </div>
        <div class="flex w-1/3 p-4">
          <div class="shadow-md py-2 px-4 rounded-lg w-full">
            <div class="flex-1 flex flex-wrap justify-between -mx-4 mb-10">
            
              <div class="text-left pl-4">
                <div
                  class="text-[#222222] text-xs leading-5 mb-2 line-through"
                >
                  ${product.price.original} Lei
                </div>
                <div
                  class="text-2xl font-extrabold text-[#ef2809] leading-5"
                >
                  ${product.price.discountedPrice} Lei
                </div>
                <div
                  class="text-[#222222] text-xs font-semibold leading-5 mb-2"
                >
                  Economisești: ${handlePercentage(product)} %
                </div>
                <div
                  class="leading-semibold text-4 leading-normal text-[#222222]"
                >
                Vândut și livrat de: ${product.price.seller.name}
                </div>
                <div
                  class="text-[#666666] font-normal text-base leading-tight"
                >
                  în stoc
                </div>
              </div>
              <div class="text-right pr-4">
                <div
                  class="font-semibold text-[#888888] text-xs leading-5 mb-2"
                >
                  Rate lunare de la
                </div>
                <div class="text-2xl font-extrabold leading-5">
                ${handleCalculateRata(product)} Lei
                </div>
                <div class="text-[#222222] font-semibold text-xs">
                  Vezi detalii
                </div>
              </div>
            </div>
            <div
              class="font-semibold text-sm leading-normal text-[#222222]"
            >
              ${product.price.otherDiscounts[0].provider}: +${
    product.price.otherDiscounts[0].discount
  } lei pentru tine
            </div>
            <div class="font-normal text-sm leading-normal text-[#888888]">
            ${product.price.otherDiscounts[0].provider}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

handleGenerateProductCard(asusLaptop);
handleGenerateProductCard(appleLaptop);

// console.log(appleLaptop.configurations["alege tip procesor"]);
