const DATA_URL = "script/dev/data.json";
const itemsList = document.querySelector(".items-list");

async function getData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.mesage);
  }
}

function createItem(item) {
  const { category, score } = item;
  const html = `<li class="list-item ${category.toLowerCase()}">
        <img
          src="./assets/images/icon-${category.toLowerCase()}.svg"
          alt="${category.toLowerCase()}"
        /><span class="name">${category}</span>
        <p class="score"><span>${score}</span>/100</p>
        </li>`;
  itemsList.insertAdjacentHTML("afterbegin", html);
}

async function renderList() {
  const data = await getData(DATA_URL);
  const reversedData = data.splice("").reverse();
  reversedData.forEach(createItem);
}

renderList();
