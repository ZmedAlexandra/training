// setTimeout(() => {
//   alert("Am ajuns");
// }, 10000);

// console.log("ceva");

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

const shouldResolve = true;
const firstPromise = new Promise((resolved, rejected) => {
  if (shouldResolve) {
    resolved("OK");
  } else {
    rejected("Failed");
  }
});

firstPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done executing promise");
  });

const baseURL = "https://reqres.in";

const ENDPOINTS = {
  USERS: "/api/users",
};

// fetch e promice ce face network request
fetch(baseURL + "/api/users");

// get = vreau date
// post = iti trimit date ca sa returnezi datele
// put = iti trimit date ca sa faci update la date
// delete= sterge data

const data = fetch(baseURL + ENDPOINTS.USERS)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((e) => console.log(e))
  .finally(() => console.log("done"));

//   ASA SE FAC NETWORK REQUESTS
async function getData() {
  try {
    // await = asteapta sa se termine fetch
    const request = await fetch(baseURL + ENDPOINTS.USERS);

    //   request.json =  converteste datele din request intr-un json
    const response = await request.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
}

getData();

async function getPostData() {
  try {
    // await = asteapta sa se termine fetch
    const request = await fetch(baseURL + ENDPOINTS.USERS, {
      method: "POST",
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    });

    //   request.json =  converteste datele din request intr-un json
    const response = await request.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
}

getPostData();

// urlParams= parametrii care apare in url
const urlParams = window.location.search;
// '?lname=zmed&fname=alex&age=24'
