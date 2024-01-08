const baseURL = "https://reqres.in/api";
const ENDPOINTS = {
  USERS: "/users",
};

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get("user"));

async function getUserInfo() {
  try {
    const req = await fetch(
      baseURL + ENDPOINTS.USERS + "/" + searchParams.get("user")
    );
    const { data } = await req.json();
    console.log(data);
    document.querySelector("#usersDetails").innerHTML += detail(data);
  } catch (e) {
    alert(e.message);
  }
}

getUserInfo();

function detail(data) {
  return `<div class="flex-1 px-4">
    <div
      class="flex flex-wrap -mx-4  id="usersDetails" justify-between bg-blue rounded-xl items-center"
    >
      <div class="flex px-4 w-1/2">
        <img src="${data.avatar}" alt="" />
      </div>
      <div class="flex-1 px-4 mb-5 w-1/2">
        <p class="py-5">First Name: ${data.first_name}</p>
        <p class="py-5">Last Name: ${data.last_name}</p>
        <p class="py-5">E-mail: ${data.email}</p>
      </div>
    </div>
  </div>`;
}
