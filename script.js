const products = [
    { name:"Molla e Thata", price:3.5, image:"images/molla.jpg", description:"Molla organike e thatë" },
    { name:"Bajame Premium", price:5.0, image:"images/bajame.jpg", description:"Bajame të shëndetshme" },
    { name:"Fik i Thate", price:4.2, image:"images/fik.jpg", description:"Fik të thatë natyral" },
    { name:"Arrë Kokosi", price:2.8, image:"images/kokosi.jpg", description:"Arrë kokosi e freskët" },
    { name:"Bajame e Kripur", price:5.5, image:"images/bajame2.jpg", description:"Bajame me kripë natyrale" },
    { name:"Molla e Kuqe", price:3.8, image:"images/molla2.jpg", description:"Molla e kuqe dhe e ëmbël" },
    { name:"Fik i Kuq", price:4.5, image:"images/fik2.jpg", description:"Fik i kuq natyral" },
    { name:"Arrë Panxhari", price:6.0, image:"images/arre.jpg", description:"Arrë e shijshme" },
    { name:"Kajsia e Thate", price:3.2, image:"images/kajsia.jpg", description:"Kajsia organike e thatë" },
    { name:"Rrush i Thate", price:2.9, image:"images/rrush.jpg", description:"Rrush i thatë premium" }
];

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

function addToCartModal(){
    const product = products[selectedProductIndex];
    alert(`Ke porositur: ${product.name} për €${product.price}`);
    closeModal();
}




