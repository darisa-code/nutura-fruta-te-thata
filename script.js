const phone = "355XXXXXXXXX";

const products = [
{ name:"Arra", img:"arra.jpg", desc:"Arra natyrale dhe shumë ushqyese." },
{ name:"Arra Braziliane", img:"arra-braziliane.jfif", desc:"Të pasura me selen dhe energji." },
{ name:"Arra Pecan", img:"arra-pecan.jfif", desc:"Shije e butë dhe premium." },
{ name:"Arre Makadame", img:"arre-makadame.webp", desc:"Arra luksoze dhe kremoze." },
{ name:"Bajame", img:"bajame.jpg", desc:"Bajame të freskëta dhe proteinike." },
{ name:"Bajame pa kripë", img:"bajame-pa-kripe.jfif", desc:"Zgjedhje e shëndetshme." },
{ name:"Bajame vendi", img:"bajame-vendi.jpg", desc:"Cilësi tradicionale vendase." },
{ name:"Boronica", img:"boronica.jpg", desc:"Antioksidantë të fuqishëm." },
{ name:"Fara kungulli", img:"fara-kungulli.jfif", desc:"Snack shumë i shëndetshëm." },
{ name:"Fasule pllaqi", img:"fasule-pllaqi.jfif", desc:"Ideale për gatime tradicionale." },
{ name:"Fik i thatë", img:"fik.jpg", desc:"I ëmbël dhe energjik." },
{ name:"Huamitos", img:"huamitos.jfif", desc:"Shije unike dhe interesante." },
{ name:"Hurma parajsa", img:"hurma-parajsa.jfif", desc:"Hurma shumë të buta." },
{ name:"Hurma arabe", img:"hurma-arabe.jpg", desc:"Premium dhe shumë të ëmbla." },
{ name:"Kajsi", img:"kajsi.jfif", desc:"Kajsi të thata të shijshme." },
{ name:"Kikirik", img:"kikirik.jfif", desc:"Snack klasik me kripë." },
{ name:"Kivi i thatë", img:"kivi.jfif", desc:"Frut ekzotik shumë i mirë." },
{ name:"Kumbulla", img:"kumbulla.png", desc:"E mirë për tretje." },
{ name:"Lajthi", img:"lajthi.jfif", desc:"Krokante dhe të shijshme." },
{ name:"Misër", img:"miser.jfif", desc:"Snack i pjekur krokant." },
{ name:"Mjaltë", img:"mjalte.jpg", desc:"100% natyral." },
{ name:"Qiqra", img:"qiqra.jpg", desc:"Snack proteinik." },
{ name:"Papaya", img:"papaya.jfif", desc:"Frut tropikal i thatë." },
{ name:"Rrush i bardhë", img:"rrush-bardhe.jfif", desc:"I ëmbël dhe i lehtë." },
{ name:"Rrush i zi", img:"rrush-zi.jpg", desc:"Shije intensive." },
{ name:"Stika qeruara", img:"stika-qeruara.jpg", desc:"Snack i lehtë." },
{ name:"Stika të kuqe", img:"stika-kuqe.jfif", desc:"Me shije të veçantë." },
{ name:"Stika", img:"stika.jfif", desc:"Klasike dhe e dashur." },
{ name:"Vaj ulliri", img:"vaj-ulliri.jfif", desc:"Cilësi premium." }
];

const grid = document.getElementById("productGrid");

products.forEach((p,i)=>{
    grid.innerHTML += `
        <div class="product" onclick="openModal(${i})">
            <img src="images/${p.img}">
            <h4>${p.name}</h4>
        </div>
    `;
});

const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");

let selected;

function openModal(i){
    selected = products[i];
    modal.style.display="block";
    modalName.innerText = selected.name;
    modalDesc.innerText = selected.desc;
    modalImg.src = "images/" + selected.img;
}

function closeModal(){
    modal.style.display="none";
}

function orderNow(){
    const msg = encodeURIComponent("Dua te porosis: " + selected.name);
    window.open("https://wa.me/" + phone + "?text=" + msg);
}


