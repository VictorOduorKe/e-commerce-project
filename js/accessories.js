import trendings from "../assets/data.js";
const displayAccessoriesElement = document.querySelector(".accessories");

function displayAccessories() {
    trendings.forEach((trending, index) => {
            const div = document.createElement("div");
            div.classList.add("accessory");
            div.setAttribute("data-key", index);
            div.innerHTML = `
            <img src="../../${trending.image}" alt="${trending.name}">
            <h3>${trending.name}</h3>
            <div class="price-group">
            <p class="price">$${trending.price}</p>
            <p class="old-price">$${trending.old_price}</p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
            `;
            displayAccessoriesElement.appendChild(div);
        }
    );
};
   document.addEventListener("onLoad",displayAccessories());