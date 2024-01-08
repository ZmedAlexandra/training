const baseURL = "https://reqres.in/api";
const ENDPOINTS = {
  USERS: "/users/",
};

async function getUserInfo() {
  try {
    const req = await fetch(baseURL + ENDPOINTS.USERS);
    const { data } = await req.json();
    console.log(data);

    data.forEach((user) => {
      user.isActive = Math.random() >= 0.5;
    });
    data.forEach((user) => {
      user.isFavorite = false;
    });
    data.forEach(
      (user) =>
        (document.querySelector("#usersList").innerHTML += user.isActive
          ? cards(user)
          : "")
    );
  } catch (e) {
    alert(e.message);
  }
}

getUserInfo();

function toggleFavorite(element) {
  element.classList.toggle("text-yellow-300");
}

function cards(data) {
  return `<div  class="flex px-4 w-1/3 mb-10">
    <div
      class="w-full max-w-7xl rounded-2xl bg-black py-4 shadow-xl text-celadon text-center"
    >
      <p class="text-2xl text-celadon leading-tight font-medium py-2">
        ${data.first_name} ${data.last_name}
      </p>
      <p class="text-base leading-tight textx-celadon pb-4">${data.email}</p>
      <div class=" flex justify-center">
      <a href='users.html?user=${data.id}'> <img src="${data.avatar}"  alt="" /> </a>
      </div>
      <i class="material-symbols-outlined  px-4 py-3 inline-block  cursor-pointer " onClick="toggleFavorite(this)" >star</i> 
    </div>
  </div>`;
}
