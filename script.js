const products = [
"Arra","Arra Braziliane","Stika","Stika e kuqe","Bajame",
"Qiqra te pjekura","Stika te qeruara","Lajthi e pjekur",
"Rrush i zi","Kumbulla","Hurma arabe","Kajsi",
"Boronica e tropojes","Fara kungulli te qeruara","Huamitos",
"Miser","Lajthi vendi","Kikirik i pjekur me kripe",
"Papaya","Fik i thate","Bajame vendi","Kivi i thate",
"Arra pecan","Hurma parajsa","Hurma xheneti",
"Arre makadame","Ullij berati","Fasule","Vaj ulliri",
"Fasule te zeze","Pllaqi","Mjalte konispoli"
];

const grid = document.getElementById("productGrid");

products.forEach((name,i)=>{
    grid.innerHTML += `
        <div class="product" onclick="openModal(${i})">
            <img src="images/${i+1}.jpg">
            <h4>${name}</h4>
        </div>
    `;
});

const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalImg = document.getElementById("modalImg");

function openModal(i){
    modal.style.display="block";
    modalName.innerText = products[i];
    modalDesc.innerText = "Përshkrimi i produktit (e shkruan vetë)";
    modalPrice.innerText = "Çmimi: €5.00";
    modalImg.src = "images/" + (i+1) + ".jpg";
}

function closeModal(){
    modal.style.display="none";
}

function orderNow(){
    alert("Porosia u krye (mund ta lidhim me WhatsApp ose Stripe)");
}

