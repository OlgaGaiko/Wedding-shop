const items = [
    {
        title: "Платье Лика",
        description: "Элегантное платье и фата расшитые бабаочками",
        tags: ["женское", "платье"],
        price: 1500,
        img: "./img/1.jpg",
        rating: 4.8,
    },
    {
        title: "Платье Синди",
        description: "Простое и элегантное платье",
        tags: ["женское", "платье"],
        price: 900,
        img: "./img/2.jpg",
        rating: 3.0,
    },
    {
        title: "Платье Кристал",
        description: "Обворожительное блестящее платье приковывающее взгляд",
        tags: ["женское", "платье"],
        price: 2000,
        img: "./img/3.jpg",
        rating: 5.0,
    },
    {
        title: "Платье Моника ",
        description: "Пышное платье расшитое цветами",
        tags: ["женское", "платье"],
        price: 1050,
        img: "./img/4.jpg",
        rating: 4.7,
    },
    {
        title: "Платье Луиза",
        description: "Платье атластное, прямого силуэта",
        tags: ["женское", "платье"],
        price: 400,
        img: "./img/5.jpg",
        rating: 2.3,
    },
    {
        title: "Платье Лилия ",
        description: "Платье пышное, расшито тонкими цветами ",
        tags: ["женское", "платье"],
        price: 900,
        img: "./img/6.jpg",
        rating: 3.9,
    },
    {
        title: "Платье мини Амелия",
        description: "Платье короткое, расшито круживом",
        tags: ["женское", "платье"],
        price: 980,
        img: "./img/7.jpg",
        rating: 4.9,
    },
    {
        title: "Платье Рыбка",
        description: "Платье с длинным шлейфом и открытой спиной",
        tags: ["женское", "платье"],
        price: 1100,
        img: "./img/8.jpg",
        rating: 4.4,
    },
    {
        title: "Платье Ника",
        description: "Атластное платье с умеренно пышной юбкой",
        tags: ["женское", "платье"],
        price: 1500,
        img: "./img/9.jpg",
        rating: 4.1,
    },
    {
        title: "Платье Моника",
        description: "Платье подчеркивающее фигуру с рукавом, расшитое кружевом",
        tags: ["женское", "платье"],
        price: 800,
        img: "./img/10.jpg",
        rating: 3.7,
    },
    {
        title: "Платье Нурит",
        description: "Атластное платье с открытой спиной расшитое кружевом",
        tags: ["женское", "платье"],
        price: 2500,
        img: "./img/11.jpg",
        rating: 5.0,
    },
    {
        title: "Платье Лав",
        description: "Силуэт рыбка с длинным шлейфом и открытым декольте",
        tags: ["женское", "платье"],
        price: 1800,
        img: "./img/12.jpg",
        rating: 4.1,
    },
];

let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";

    arr.forEach((item) => {

        itemsContainer.append(prepareShopItem(item));
    });

    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}


function sortByAlphabet(a, b) {

    if (a.title > b.title) {
        return 1;
    }

    if (a.title < b.title) {
        return -1;
    }

    return 0;
}


renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));


function prepareShopItem(shopItem) {

    const { title, description, tags, img, price, rating } = shopItem;

    const item = itemTemplate.content.cloneNode(true);

    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}P`;

    const ratingContainer = item.querySelector(".rating");
    for (let i = 0; i < rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star");
        ratingContainer.append(star);
    }

    const tagsHolder = item.querySelector(".tags");

    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsHolder.append(element);
    });


    return item;
}


const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();

    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );

    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

currentState.sort((a, b) => sortByAlphabet(a, b));
renderItems(currentState);
sortControl.selectedIndex = 0;

const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive": {
            currentState.sort((a, b) => b.price - a.price);
            break;
        }
        case "cheap": {
            currentState.sort((a, b) => a.price - b.price);
            break;
        }
        case "rating": {
            currentState.sort((a, b) => b.rating - a.rating);
            break;
        }
        case "alphabet": {
            currentState.sort((a, b) => sortByAlphabet(a, b));
            break;
        }
    }

    renderItems(currentState);
});
