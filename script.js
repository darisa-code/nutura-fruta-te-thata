// NUMRI I TELEFONIT (ndryshoje këtu)
const phone = "355XXXXXXXXX";

// PRODUKTET
const products = [
{ name:"Arra", img:"arra   sh.jpg", desc:"Arra natyrale me shije të pasur dhe vlera të larta ushqyese." },
{ name:"Arra Braziliane", img:"arra braziliane.jfif", desc:"Të pasura me selen dhe shumë të shëndetshme për trupin." },
{ name:"Arra Pecan", img:"arra pecan.jfif", desc:"Shije e ëmbël dhe teksturë e butë premium." },
{ name:"Arre Makadame", img:"arre makadame.webp", desc:"Arra luksoze me shije shumë të butë dhe kremoze." },
{ name:"Bajame", img:"bajame (1).jpg", desc:"Bajame të freskëta dhe të pasura me proteina." },
{ name:"Bajame pa kripë", img:"bajame pa kripe.jfif", desc:"Zgjedhje e shëndetshme pa kripë." },
{ name:"Bajame vendi", img:"bajame vendi.jpg", desc:"Bajame vendase me cilësi të lartë." },
{ name:"Boronica Tropoje", img:"boronica-tropoje.jpg", desc:"Boronica natyrale nga Tropoja, shumë të pasura me antioksidantë." },
{ name:"Fara kungulli", img:"fara ungulli te qeruara.jfif", desc:"Të shijshme dhe të shëndetshme për çdo moment." },
{ name:"Fasule pllaqi", img:"fasule pllaqi.jfif", desc:"Fasule tradicionale për gatime të shijshme." },
{ name:"Fik i thatë", img:"fik i that.png", desc:"Fik i ëmbël dhe natyral, shumë energjik." },
{ name:"Huamitos", img:"huamitoss.jfif", desc:"Produkt unik me shije të veçantë." },
{ name:"Hurma parajsa", img:"hurma parajsa.jfif", desc:"Hurma të buta dhe shumë të ëmbla." },
{ name:"Hurma arabe", img:"hurma-arabe.jpg", desc:"Hurma premium nga vendet arabe." },
{ name:"Kajsi të thata", img:"kajsi te thata.jfif", desc:"Kajsi të thata me shije të freskët." },
{ name:"Kikirik me kripë", img:"kikirik me krip.jfif", desc:"Snack perfekt me shije të kripur." },
{ name:"Kivi i thatë", img:"kivi i that.jfif", desc:"Kivi ekzotik me shije të ëmbël dhe acidike." },
{ name:"Kumbulla", img:"kumbulla.png", desc:"Kumbulla të thata shumë të shëndetshme." },
{ name:"Lajthi", img:"lajthi.jfif", desc:"Lajthi krokante dhe të shijshme." },
{ name:"Misër i pjekur", img:"miser i pjekur.jfif", desc:"Snack i shijshëm dhe krokant." },
{ name:"Mjaltë", img:"mjalte.jpg", desc:"Mjaltë natyral 100% i pastër." },
{ name:"Qiqra të pjekura", img:"qiqra te pjekme.jpg", desc:"Snack proteinik shumë i mirë." },
{ name:"Papaya", img:"papaya.jfif", desc:"Frut ekzotik i thatë me shije të ëmbël." },
{ name:"Rrush i bardhë", img:"rrush i bardhe i thate.jfif", desc:"Rrush i thatë i bardhë shumë i shijshëm." },
{ name:"Rrush i zi", img:"rrush-i-thate i zi.jpg", desc:"Rrush i zi me shije intensive." },
{ name:"Stika qeruara", img:"stika qeruara.jpg", desc:"Snack perfekt dhe i lehtë." },
{ name:"Stika të kuqe", img:"stika te kuqe.jfif", desc:"Stika me shije të veçantë." },
{ name:"Stika", img:"stika.jfif", desc:"Snack klasik dhe i dashur." },
{ name:"Vaj ulliri", img:"vaj ulliri - Copy.jfif", desc:"Vaj ulliri cilësor dhe natyral." }
];

// GRID
const grid = document.getElementById("productGrid");

products.forEach((p,i)=>{
    grid.innerHTML += `
        <div class="product" onclick="openModal(${i})">
            <img src="images/${p.img}">
            <h4>${p.name}</h4>
        </div>
    `;
});

// MODAL
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

// WHATSAPP BUTTON POSHTE
const waBtn = document.getElementById("waBtn");
waBtn.href = "https://wa.me/" + phone;

// POROSI NGA MODAL
function orderNow(){
    const msg = encodeURIComponent("Pershendetje, dua te porosis: " + selected.name);
    window.open("https://wa.me/" + phone + "?text=" + msg);
}

