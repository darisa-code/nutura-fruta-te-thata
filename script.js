// Lista e produkteve
const products = [];

// Gjenerojmë 106 produkte
for (let i = 1; i <= 106; i++) {
    products.push({
        id: i,
        name: "Produkt " + i,
        price: (Math.random() * 10 + 2).toFixed(2),
        image: "images/product" + i + ".jpg",
        description: "Përshkrimi i produktit " + i
    });
}

// Shfaq produktet në div-in #productGrid
const grid = document.getElementById("productGrid");

products.forEach(product => {
    grid.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">€${product.price}</p>
            <button onclick="addToCart(${product.id})">Shto në Shportë</button>
        </div>
    `;
});

// SHOPPING CART
const cart = [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById("cartCount").innerText = cart.length;
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
    let itemsHTML = "";
    let total = 0;

    cart.forEach(item => {
        itemsHTML += `<p>${item.name} - €${item.price}</p>`;
        total += parseFloat(item.price);
    });

    document.getElementById("cartItems").innerHTML = itemsHTML;
    document.getElementById("totalPrice").innerText = "Totali: €" + total.toFixed(2);
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function checkout() {
    alert("Këtu mund të lidhet Stripe për pagesë me kartë.");
}

