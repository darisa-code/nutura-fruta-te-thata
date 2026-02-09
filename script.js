// Lista e produkteve (vendos emrat dhe fotot e tua)
const products = [
    { name:"Molla e Thata", price:3.5, image:"images/molla.jpg", description:"Molla organike e thatë" },
    { name:"Bajame Premium", price:5.0, image:"images/bajame.jpg", description:"Bajame të shëndetshme" },
    { name:"Fik i Thate", price:4.2, image:"images/fik.jpg", description:"Fik të thatë natyral" },
    // vazhdo për të gjithë produktet deri 106
];

// Shfaq produktet në grid
const grid = document.getElementById("productGrid");

products.forEach((product,index)=>{
    grid.innerHTML += `
        <div class="product" onclick="openModal(${index})">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>€${product.price}</p>
        </div>
    `;
});

// Modal
const modal = document.getElementById("productModal");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImage = document.getElementById("modalImage");

let selectedProductIndex;

function openModal(index){
    selectedProductIndex = index;
    const product = products[index];
    modal.style.display = "block";
    modalName.innerText = product.name;
    modalDesc.innerText = product.description;
    modalPrice.innerText = "€" + product.price;
    modalImage.src = product.image;
}

function closeModal(){
    modal.style.display = "none";
}

// Porosi (alert për tani)
function addToCartModal(){
    const product = products[selectedProductIndex];
    alert(`Ke porositur: ${product.name} për €${product.price}`);
    closeModal();
}




