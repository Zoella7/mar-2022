

// document.write(`<div>`);
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Some important text</div>`);
//    }
// document.write(`</div>`);

// document.write(`<div>`);
//
// for (let i = 0; i <10; i++) {
//     document.write(`<div> Text ${i}</div>`);
//     }
// document.write(`</div>`);

// document.write(`<div>`)
// let i = 0;
// while(i < 20) {
//     document.write(`<h1>Text</h1>`);
//     i++;
// }
// document.write(`</div>`)

//
// document.write(`<div>`)
// let i = 0;
// while(i < 20) {
//     document.write(`<h1>Text ${i}</h1>`);
//     i++;
// }
// document.write(`</div>`)

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (let i = 0; i < listOfItems.length; i++) {
// document.write(`<li>${listOfItems[i]}</li>`);
// }
// document.write(`</ul>`);


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div>`);

for (let i = 0; i < products.length; i++) {
    for (let product of products) {
        document.write(`<div class="product-card">
            <h3 class="product-title">${product.title} - ${product.price}</h3>
            <img src="${product.image}" alt="" class="product-image">
        </div>`)

    }

}
document.write(`<div>`);