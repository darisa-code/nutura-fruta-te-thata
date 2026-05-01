const number = "355695432222";

const products = [
{name:"Arra",price:900,desc:"Arra të freskëta.",img:"arra.jpg"},
{name:"Arra Braziliane",price:1200,desc:"Shumë të shëndetshme.",img:"arrabraziliane.jpg"},
{name:"Arra Pecan",price:1300,desc:"Shije e veçantë.",img:"arrapecan.jpg"},
{name:"Arra Makadame",price:1500,desc:"Premium.",img:"arremakadame.jpg"},
{name:"Bajame",price:800,desc:"Snack perfekt.",img:"bajame.jpg"},
{name:"Bajame pa kripë",price:850,desc:"Dietë e shëndetshme.",img:"bajamepakripe.jpg"},
{name:"Bajame vendi",price:900,desc:"Produkt vendas.",img:"bajamevendi.jpg"},
{name:"Boronica Tropoje",price:1400,desc:"Superfruit.",img:"boronicatropoje.jpg"},
{name:"Fara kungulli",price:700,desc:"Të shëndetshme.",img:"farakungulli.jpg"},
{name:"Fasule pllaqi",price:300,desc:"Tradicionale.",img:"fasulepllaqi.jpg"},
{name:"Fasule zezë",price:350,desc:"E pasur me proteina.",img:"fasulezez.jpg"},
{name:"Fik i thatë",price:600,desc:"I ëmbël natyral.",img:"fikithat.jpg"},
{name:"Huamitos",price:1000,desc:"Ekzotik.",img:"huamitoss.jpg"},
{name:"Hurma",price:800,desc:"Energjike.",img:"hurma.jpg"},
{name:"Hurma arabe",price:850,desc:"Shumë të buta.",img:"hurmaarabe.jpg"},
{name:"Kajsi të thata",price:700,desc:"Të pasura me vitamina.",img:"kajsitethata.jpg"},
{name:"Kikirik me kripë",price:500,desc:"Snack perfekt për çdo moment.",img:"kikirikmekrip.jpg"},
{name:"Kivi i thatë",price:900,desc:"Shije e freskët dhe e ëmbël.",img:"kiviithat.jpg"},
{name:"Kumbulla",price:650,desc:"Ndihmon tretjen.",img:"kumbulla.jpg"},
{name:"Lajthi",price:900,desc:"Lajthi të freskëta premium.",img:"lajthi.jpg"},
{name:"Misër i pjekur",price:400,desc:"Snack i kripur shumë i shijshëm.",img:"miseripjekur.jpg"},
{name:"Mjalt",price:1000,desc:"Mjalt natyral 100%.",img:"mjalte.jpg"},
{name:"Qiqra të pjekura",price:400,desc:"Snack i shëndetshëm.",img:"qiqratepjekme.jpg"},
{name:"Papaya",price:1100,desc:"Frut ekzotik i thatë.",img:"papaya.jpg"},
{name:"Rrush i bardhë",price:600,desc:"I ëmbël dhe natyral.",img:"rrushibardheithate.jpg"},
{name:"Rrush i zi",price:650,desc:"Plot shije dhe energji.",img:"rrushithateizi.jpg"},
{name:"Stika",price:1200,desc:"Stika premium shumë e shijshme.",img:"stika.jpg"},
{name:"Stika të kuqe",price:1250,desc:"Variant special.",img:"stikatekuqe.jpg"},
{name:"Stika të qeruara",price:1300,desc:"Gati për konsum.",img:"stikaqeruara.jpg"},
{name:"Vaj ulliri",price:1200,desc:"Extra virgin cilësi e lartë.",img:"vajulliri.jpg"}
];

const grid = document.getElementById("grid");

products.forEach((p,i)=>{
  grid.innerHTML += `
    <div class="product" onclick="openModal(${i})">
      <img src="./images/${p.img}">
      <h4>${p.name}</h4>
    </div>`;
});

const modal = document.getElementById("modal");
let current;

function openModal(i){
  current = products[i];
  modal.style.display = "block";

  document.getElementById("mImg").src = "./images/" + current.img;
  document.getElementById("mName").innerText = current.name;
  document.getElementById("mDesc").innerText = current.desc;
  document.getElementById("mPrice").innerText = current.price + " ALL";
}

function closeModal(){
  modal.style.display = "none";
}

function order(){
  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent("Dua të porosis: " + current.name)}`
  );
}

document.getElementById("waBtn").href = `https://wa.me/${number}`;
