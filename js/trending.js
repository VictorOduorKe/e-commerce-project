import trendings from "../assets/data.js";

const displayTrendingsElement = document.querySelector(".trendings");

function displayTrendings() {
    trendings.forEach(function (trending, index) {
        const div = document.createElement("div");
        div.classList.add("trending");
        div.setAttribute("data-key", index);
        div.innerHTML = `
        <img src="${trending.image}" alt="${trending.name}">
        <h3>${trending.name}</h3>
        <div class="price">
            <p class="old-price">$${trending.old_price}</p>
            <p>$${trending.price}</p>
        </div>
        <button data-index="${index}" class="add-to-cart-btn">Add to Cart</button>
        `;
        displayTrendingsElement.appendChild(div);
    });

    const buttons = document.querySelectorAll(".add-to-cart-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            addToCart(index);
        });
    });
}
displayTrendings();

function addToCart(index) {
    const trending = trendings[index];
    
    
    let cartItems = localStorage.getItem("Cart_items");
    
    
    if (!cartItems) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(cartItems);
    }

    const itemExists = cartItems.some(item => item.name === trending.name);
    if(itemExists){
        alert("Item already exists in the cart");
        return;
    }
    cartItems.push(trending);

    
    localStorage.setItem("Cart_items", JSON.stringify(cartItems));

    console.log("Added to cart:", trending);
}

