const phoneNumber = "355XXXXXXXXX"; // VENDOS NUMRIN TEND

const products = [
{
name:"Arra",
price:"1200 Lek/kg",
image:"images/arra.jpg",
desc:"Arra natyrale, të pasura me omega-3 dhe shumë të shëndetshme për zemrën."
},
{
name:"Arra Braziliane",
price:"1800 Lek/kg",
image:"images/arrabraziliane.jfif",
desc:"Arra braziliane premium, burim i selenit dhe energjisë natyrale."
},
{
name:"Arra Pecan",
price:"2000 Lek/kg",
image:"images/arrapecan.jfif",
desc:"Arra pecan të buta dhe shumë të shijshme, ideale për snack dhe ëmbëlsira."
},
{
name:"Arre Makadame",
price:"2500 Lek/kg",
image:"images/arremakadame.webp",
desc:"Arra makadame luksoze, shumë të pasura dhe me shije të veçantë."
},
{
name:"Bajame",
price:"1400 Lek/kg",
image:"images/bajame.jpg",
desc:"Bajame të freskëta dhe të pasura me proteina dhe fibra."
},
{
name:"Bajame Vendit",
price:"1300 Lek/kg",
image:"images/bajamevendi.jpg",
desc:"Bajame shqiptare, natyrale dhe me shije autentike."
},
{
name:"Boronica Tropoje",
price:"2200 Lek/kg",
image:"images/boronica-tropoje.jpg",
desc:"Boronica nga Tropoja, shumë të pasura me antioksidantë."
},
{
name:"Fik i Thate",
price:"900 Lek/kg",
image:"images/fikithat.png",
desc:"Fik të thatë të ëmbël dhe energjik."
},
{
name:"Hurma Arabe",
price:"800 Lek/kg",
image:"images/hurma-arabe.jpg",
desc:"Hurma të buta dhe shumë të ëmbla, ideale për energji."
},
{
name:"Kajsi të Thata",
price:"1000 Lek/kg",
image:"images/kajsitethata.jfif",
desc:"Kajsi të thata me shije të freskët dhe natyrale."
},
{
name:"Kikirik me Kripë",
price:"700 Lek/kg",
image:"images/kikirikmekrip.jfif",
desc:"Kikirik të pjekur me kripë, snack perfekt."
},
{
name:"Kivi i Thate",
price:"1500 Lek/kg",
image:"images/kiviithat.jfif",
desc:"Kivi i thatë me shije ekzotike dhe të veçantë."
},
{
name:"Kumbulla",
price:"900 Lek/kg",
image:"images/kumbulla.png",
desc:"Kumbulla të thata për tretje dhe shëndet."
},
{
name:"Lajthi",
price:"1400 Lek/kg",
image:"images/lajthi.jfif",
desc:"Lajthi të freskëta dhe të shijshme."
},
{
name:"Mjalte",
price:"1200 Lek/kg",
image:"images/mjalte.jpg",
desc:"Mjaltë natyral shqiptar, shumë i shëndetshëm."
}
];

const grid = document.getElementById("productGrid");

products.forEach((p,i)=>{
grid.innerHTML += `
<div class="product" onclick="openModal(${i})">
<img src="${p.image}">
<h4>${p.name}</h4>
</div>`;
});

const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImg = document.getElementById("modalImg");

let current;

function openModal(i){
current=i;
const p = products[i];
modal.style.display="block";
modalName.innerText=p.name;
modalDesc.innerText=p.desc;
modalPrice.innerText=p.price;
modalImg.src=p.image;
}

function closeModal(){
modal.style.display="none";
}

function orderNow(){
const p = products[current];
window.open(`https://wa.me/${phoneNumber}?text=Dua%20te%20porosis%20${p.name}`);
}

document.getElementById("waBtn").href = "https://wa.me/" + phoneNumber;



