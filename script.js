// 
const products = [];

// Gjenerojmë 106 produkte automatikisht
for (let i = 1; i <= 106; i++) {
    products.push({
        id: i,
        name: "Produkt " + i,
        price: (Math.random() * 10 + 2).toFixed(2), // çmimi nga 2€ deri 12€
        image: "images/product" + i + ".jpg",        // vendos fotot në folder /images
        description: "Përshkrimi i produktit " + i
    });
}
