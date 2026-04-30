const products = [
{
name:"Arra",
price:1200,
image:"images/arra.jpg",
desc:"Arra natyrale, të pasura me omega-3 dhe shumë të shëndetshme."
},
{
name:"Arra Braziliane",
price:1800,
image:"images/arrabraziliane.jpg",
desc:"Arra braziliane me shije të pasur dhe burim i mirë i selenit."
},
{
name:"Arra Pecan",
price:2000,
image:"images/arrapecan.jpg",
desc:"Arra pecan premium, ideale për snacks dhe ëmbëlsira."
},
{
name:"Arra Makadame",
price:2500,
image:"images/arremakadame.jpg",
desc:"Arra makadame shumë të buta dhe me shije luksoze."
},
{
name:"Bajame",
price:900,
image:"images/bajame.jpg",
desc:"Bajame të freskëta dhe të pasura me proteina."
},
{
name:"Bajame pa kripë",
price:950,
image:"images/bajamepakripe.jpg",
desc:"Bajame natyrale pa kripë, ideale për dietë."
},
{
name:"Bajame vendi",
price:1000,
image:"images/bajamevendi.jpg",
desc:"Bajame vendase me cilësi të lartë."
},
{
name:"Boronica e Tropojes",
price:1500,
image:"images/boronica.jpg",
desc:"Boronica të thata nga Tropoja, shumë të shëndetshme."
},
{
name:"Fara kungulli",
price:700,
image:"images/farakungulli.jpg",
desc:"Fara kungulli të qëruara, perfekte për snack."
},
{
name:"Fasule pllaqi",
price:400,
image:"images/fasulepllaqi.jpg",
desc:"Fasule të bardha për gatime tradicionale."
},
{
name:"Fik i thatë",
price:800,
image:"images/fikithat.jpg",
desc:"Fik i thatë i ëmbël dhe energjik."
},
{
name:"Huamitos",
price:900,
image:"images/huamitos.jpg",
desc:"Produkt i veçantë me shije ekzotike."
},
{
name:"Hurma arabe",
price:1200,
image:"images/hurmaarabe.jpg",
desc:"Hurma arabe shumë të ëmbla dhe cilësore."
},
{
name:"Hurma",
price:1000,
image:"images/hurma.jpg",
desc:"Hurma natyrale për energji të shpejtë."
},
{
name:"Hurma parajsa",
price:1300,
image:"images/hurmaparajsa.jpg",
desc:"Hurma premium me shije të veçantë."
},
{
name:"Kajsi të thata",
price:900,
image:"images/kajsitethata.jpg",
desc:"Kajsi të thata të ëmbla dhe të shëndetshme."
},
{
name:"Kikirik me kripë",
price:600,
image:"images/kikirik.jpg",
desc:"Kikirik të pjekur me kripë, snack perfekt."
},
{
name:"Kivi i thatë",
price:1100,
image:"images/kivi.jpg",
desc:"Kivi i thatë me shije tropikale."
},
{
name:"Kumbulla",
price:850,
image:"images/kumbulla.jpg",
desc:"Kumbulla të thata të shijshme dhe të shëndetshme."
},
{
name:"Lajthi",
price:1200,
image:"images/lajthi.jpg",
desc:"Lajthi të freskëta dhe shumë të shijshme."
},
{
name:"Misër i pjekur",
price:500,
image:"images/miser.jpg",
desc:"Misër i pjekur krokant."
},
{
name:"Mjaltë",
price:1500,
image:"images/mjalte.jpg",
desc:"Mjaltë natyral i pastër."
},
{
name:"Papaya",
price:1000,
image:"images/papaya.jpg",
desc:"Papaya e thatë me shije tropikale."
},
{
name:"Qiqra të pjekura",
price:600,
image:"images/qiqra.jpg",
desc:"Qiqra krokante dhe shumë të shijshme."
},
{
name:"Rrush i thatë",
price:700,
image:"images/rrush.jpg",
desc:"Rrush i thatë i ëmbël dhe energjik."
},
{
name:"Stika",
price:900,
image:"images/stika.jpg",
desc:"Stika të freskëta dhe të shijshme."
},
{
name:"Stika të qëruara",
price:1100,
image:"images/stikaqeruara.jpg",
desc:"Stika pa lëkurë, gati për konsum."
},
{
name:"Stika të kuqe",
price:1000,
image:"images/stikakuqe.jpg",
desc:"Stika të kuqe me shije të veçantë."
},
{
name:"Vaj ulliri",
price:1200,
image:"images/vajulliri.jpg",
desc:"Vaj ulliri ekstra i virgjër."
}
];

const grid = document.getElementById("productGrid");

products.forEach((p,i)=>{
grid.innerHTML += `
<div class="product" onclick="openModal(${i})">
<img src="${p.image}">
<h4>${p.name}</h4>
</div>
`;
});

const modal = document.getElementById("modal");

function openModal(i){
const p = products[i];
modal.style.display="block";
document.getElementById("modalName").innerText=p.name;
document.getElementById("modalDesc").innerText=p.desc;
document.getElementById("modalPrice").innerText="Çmimi: "+p.price+" Lek";
document.getElementById("modalImg").src=p.image;

window.selectedProduct = p.name;
}

function closeModal(){
modal.style.display="none";
}

function orderNow(){
window.open("https://wa.me/355XXXXXXXXX?text=Dua%20te%20porosis:%20"+window.selectedProduct);
}

