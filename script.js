// Lista e produkteve (shto të gjitha 106 produktet këtu)
const products = [
    { name:"Molla e Thata", price:3.5, image:"images/molla.jpg", description:"Molla organike e thatë" },
    { name:"Bajame Premium", price:5.0, image:"images/bajame.jpg", description:"Bajame të shëndetshme" },
    { name:"Fik i Thate", price:4.2, image:"images/fik.jpg", description:"Fik të thatë natyral" },
    { name:"Kajsia e Thate", price:3.2, image:"images/kajsia.jpg", description:"Kajsia organike e thatë" },
    { name:"Rrush i Thate", price:2.9, image:"images/rrush.jpg", description:"Rrush i thatë premium" }
    // vazhdo deri tek 106
];

// Funksioni që gjeneron kutizat automatikisht
const productGrid = document.getElementById("productGrid");

products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "small-box";           // Kutiza katrore
    div.innerHTML = `<p>${product.name}</p>`;
    div.onclick = () => openModal(index);  // Klikimi hap modal
    productGrid.appendChild(div);
});

// Modal i produktit
const modal = document.getElementById("productModal");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImage = document.getElementById("modalImage");

let selectedProductIndex;

// Hap modal
function openModal(index) {
    selectedProductIndex = index;
    const product = products[index];
    modal.style.display = "block";
    modalName.innerText = product.name;
    modalDesc.innerText = product.description;
    modalPrice.innerText = "€" + product.price;
    modalImage.src = product.image;
}

// Mbyll modal
function closeModal() {
    modal.style.display = "none";
}

// Butoni porosit
function addToCartModal() {
    const product = products[selectedProductIndex];
    alert(`Ke porositur: ${product.name} për €${product.price}`);
    closeModal();
}




