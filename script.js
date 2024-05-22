const products = [
    {
        title: "Платье Лика",
        description: "Элегантное платье и фата расшитые бабаочками",
        price: 1500,
        img: "./img/1.jpg",
        rating: 4.8,
    },
    {
        title: "Платье Синди",
        description: "Простое и элегантное платье",
        price: 900,
        img: "./img/2.jpg",
        rating: 3.0,
    },
    {
        title: "Платье Кристал",
        description: "Обворожительное блестящее платье приковывающее взгляд",
        price: 2000,
        img: "./img/3.jpg",
        rating: 5.0,
    },
    {
        title: "Платье Моника ",
        description: "Пышное платье расшитое цветами",
        price: 1050,
        img: "./img/4.jpg",
        rating: 4.7,
    },
    {
        title: "Платье Луиза",
        description: "Платье атластное, прямого силуэта",
        price: 400,
        img: "./img/5.jpg",
        rating: 2.3,
    },
    {
        title: "Платье Лилия ",
        description: "Платье пышное, расшито тонкими цветами ",
        price: 900,
        img: "./img/6.jpg",
        rating: 3.9,
    },
    {
        title: "Платье мини Амелия",
        description: "Платье короткое, расшито круживом",
        price: 980,
        img: "./img/7.jpg",
        rating: 4.9,
    },
    {
        title: "Платье Рыбка",
        description: "Платье с длинным шлейфом и открытой спиной",
        price: 1100,
        img: "./img/8.jpg",
        rating: 4.4,
    },
    {
        title: "Платье Ника",
        description: "Атластное платье с умеренно пышной юбкой",
        price: 1500,
        img: "./img/9.jpg",
        rating: 4.1,
    },
    {
        title: "Платье Моника",
        description: "Платье подчеркивающее фигуру с рукавом, расшитое кружевом",
        price: 800,
        img: "./img/10.jpg",
        rating: 3.7,
    },
    {
        title: "Платье Нурит",
        description: "Атластное платье с открытой спиной расшитое кружевом",
        price: 2500,
        img: "./img/11.jpg",
        rating: 5.0,
    },
    {
        title: "Платье Лав",
        description: "Силуэт рыбка с длинным шлейфом и открытым декольте",
        price: 1800,
        img: "./img/12.jpg",
        rating: 4.1,
    },
];

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const itemsContainer = document.getElementById("items-container");
const sortSelect = document.getElementById("sort");
const nothingFoundMessage = document.getElementById("nothing-found");


function generateCards() {
    itemsContainer.innerHTML = "";

    const filteredProducts = applyFilters(products);

    if (filteredProducts.length === 0) {
        nothingFoundMessage.style.display = "block";
    } else {
        nothingFoundMessage.style.display = "none";
        filteredProducts.forEach((product) => {
            const card = document.createElement("div");
            card.classList.add("shop-item");

            const img = document.createElement("img");
            img.src = "product-image.jpg";
            img.alt = product.title;

            const content = document.createElement("div");
            content.classList.add("content");

            const tags = document.createElement("div");
            tags.classList.add("tags");


            const title = document.createElement("h1");
            title.textContent = product.name;

            const description = document.createElement("p");
            description.textContent = product.description;

            content.appendChild(tags);
            content.appendChild(title);
            content.appendChild(description);

            const footer = document.createElement("div");
            footer.classList.add("footer");

            const price = document.createElement("span");
            price.textContent = `Price: $${product.price}`;

            const rating = document.createElement("div");
            rating.classList.add("rating");

            footer.appendChild(price);
            footer.appendChild(rating);

            card.appendChild(img);
            card.appendChild(content);
            card.appendChild(footer);
            img.src = product.img;

            itemsContainer.appendChild(card);
        });
    }
}


function applyFilters(products) {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const sortOption = sortSelect.value;

    let filteredProducts = products;

    if (searchTerm) {
        filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        );
    }

    if (sortOption !== "alphabet") {
        filteredProducts.sort((a, b) => {
            if (sortOption === "expensive") {
                return b.price - a.price;
            } else if (sortOption === "cheap") {
                return a.price - b.price;
            } else if (sortOption === "rating") {
                return b.rating - a.rating;
            }
            return 0;
        });
    }

    return filteredProducts;
}

searchInput.addEventListener("input", generateCards);
searchBtn.addEventListener("click", generateCards);
sortSelect.addEventListener("change", generateCards);

generateCards();