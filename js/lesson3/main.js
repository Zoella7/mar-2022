

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



// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let product of products) {
//     document.write(`<div class="product-card">
//         <h3 class="product-title">${product.title} - ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
// </div>`)
// }

// for (const user of users) {
//     if (user.status){
//         // document.write(`<li>${user.name} - ${user.status}</li>`);
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (!user.status){
//         document.write(`<li>${user.name} - ${user.status}</li>`);
//     }
// }
//
//
// document.write(`<ul>`);
// for (const user of users) {
//     if (user.age > 30) {
//         document.write(`<li>${user.name} - ${user.age}</li>`);
//     }
// }
// document.write(`</ul>`);



// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = numbers.length - 1;
// while(i >=0){
//    if((numbers[i] % 2) ===0){
//        console.log(numbers[i]);
//    }
//     i--;
// }


// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if((numbers[i] %2) !== 0){
//         console.log(numbers[i]);
//     }
//
// }

// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     if((numbers[i] % 3) === 0){
//         numbers[i] = 'okten'
//     }
//     console.log(numbers[i]);
//   }


// let userAge = [ 22, 34, 11, 46, 66, 31, 18, 15, 23, 25];
// for (let i = 0; i < userAge.length; i++) {
//     console.log(userAge[i]);
//
// }
//
// let userName =[ 'anya', 'oleg', 'olena', 'ihor', 'anton', 'ira', 'marta', 'orest', 'ivan', 'kolia'];
// let i = 0;
// while ( i < userName.length){
//     console.log(userName[i]);
//     i++;
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let Key in users) {
//     console.log(users[Key].name);
//
// }

// for (let i = 0; i < 100; i+=2) {
//     console.log([i]);
//    
// }

// for (let i = 0; i < 100; i++) {
//     if((i % 2) ===0){
//         document.write(`<h5> ${i}</h5>`);
//     }
//
// }


let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

    for (const user of usersList) {
        document.write(`<div class="users-box">
            <div class="user-block">
                <h2>${user.id} - ${user.name}   ${user.username} </h2>
                <h3>${user.email} - ${user.phone}</h3>
                <div class="address-block">
                    <p>City - ${user.address.city}</p>
                    <p>Street - ${user.address.street}</p>
                    <p>Suite - ${user.address.suite}</p>
                    <p>Zip code - ${user.address.zipcode}</p>
                </div>
            </div>
            
            </div>`);
    }