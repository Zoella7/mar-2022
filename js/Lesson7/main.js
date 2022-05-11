// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// class user{
//     constructor(id, name, surname, email, phone) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
//     }
//     let user1 = new user('1', 'name', 'surmane', 'email', 3800993983)
//     let user2 = new user('2', 'name', 'surmane', 'email', 3800993983)
//     let user3 = new user('3', 'name', 'surmane', 'email', 3800993983)
//     let user4 = new user('4', 'name', 'surmane', 'email', 3800993983)
//     let user5 = new user('5', 'name', 'surmane', 'email', 3800993983)
//     let user6 = new user('6', 'name', 'surmane', 'email', 3800993983)
//     let user7 = new user('7', 'name', 'surmane', 'email', 3800993983)
//     let user8 = new user('8', 'name', 'surmane', 'email', 3800993983)
//     let user9 = new user('9', 'name', 'surmane', 'email', 3800993983)
//     let user10 = new user('10', 'name', 'surmane', 'email', 3800993983)
// let array = [user1,user2, user3, user4, user5, user6, user7, user8, user9, user10]
// // let arrayOfusers = array.filter(value => value.id % 2 === 0)
// // console.log(arrayOfusers);
// console.log(array.sort((a, b) => b.id - a.id));


// // // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // // створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
//     }
// let user1 = new Client('1', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['banana', 'apple', 'water']);
// let user5 = new Client('5', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['apple', 'water']);
// let user2 = new Client('2', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['banana', 'apple', 'water', 'lime']);
// let user3 = new Client('3', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['banana']);
// let user6 = new Client('6', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['banana', 'apple', 'water']);
// let user7 = new Client('7', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, [ 'apple', 'water']);
// let user8 = new Client('8', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['water']);
// let user4 = new Client('4', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['banana', 'apple', 'water']);
// let user9 = new Client('9', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234, ['banana', 'apple', 'water', 'lemon']);
// let user10 = new Client('10', 'Ivan', 'Naumenko', 'ivanIvan@gmai.com', 0994466234,['banana', 'apple', 'water','lemon', 'kivi']);
//
// let array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
// console.log(array);
// console.log(array.sort((a, b) => b.order.length - a.order.length));


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function car(model, producer, year, maxspeed,capacity) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxspeed =maxspeed
//     this.capacity = capacity
//     this.drive = function () {
//         // console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (let item in this) {
//             // console.log(`${item} - ${this[item]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newspeed) {
//         this.maxspeed +=newspeed
//     };
//     this.year= function (newYear) {
//         this.year=newYear
//     };
//     this.driver = function (driver){
//         this.driver = driver
//     }
//
// }
//     let car2 = new car('volvo', 'germany', 2008, 200, 4)
//     car2.drive();
//     car2.info()
//     car2.increaseMaxSpeed(20);
//     car2.year(2018)
//     car2.driver('olha')
//     console.log(car2);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class car {
//     constructor(model, producer, year, maxspeed, value) {
//         this.model= model
//         this.producer= producer
//         this.year=year
//         this.maxspeed=maxspeed
//         this.value=value
//             }
//     //     drive () {
//     //         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     //     };
//     //         info () {
//     //             for (let carKey in this) {
//     //                 console.log(`${carKey} - ${this.carKey} `);
//     //             }
//     //         };
//     increaseMaxSpeed (newspeed) {
//         this.maxspeed += newspeed
//     };
//     yearCar(newYear) {
//         this.year = newYear;
//     };
//     addDriver(driver) {
//         this.driver = driver
//     }
//
// }
//     let car2 = new car('volvo', 'germany', 2008, 200, 4)
//     // car2.drive();
//     // car2.info()
//     car2.increaseMaxSpeed(20);
//     car2.yearCar(2018)
//     car2.addDriver('olha')
//     console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Singerella {
    constructor(name, age, size) {
        this.name=name
        this.age=age
        this.size=size
    }
}

let girl1 = new Singerella('Kate', 27, 37)
let girl2 = new Singerella('Anna', 23, 41)
let girl3 = new Singerella('Ammanda', 21, 38)
let girl4 = new Singerella('Olha', 44, 38)
let girl5 = new Singerella('Ira', 76, 39)
let girl6 = new Singerella('Maria', 33, 32)
let girl7 = new Singerella('Ivanka', 22, 37)
let girl8 = new Singerella('Hanna', 55, 34)
let girl9 = new Singerella('Sasha', 65, 38)
let girl10 = new Singerella('Sahra', 18, 36)

let listOfgirls = [girl1, girl2,girl3,girl4, girl5,girl6,girl7, girl8, girl9, girl10 ]
console.log(listOfgirls);

class prince{
    constructor(name, age, findshoe) {
        this.name = name
        this.age =age
        this.findshoe =findshoe
    }
    }
    let newprince = new prince('Henry', 32,32)

let search = (listOfgirls, prince) =>{

    for (let item of listOfgirls) {
        if( item.size === prince.findshoe){
            return `${item.name}`
        }

    }
}

console.log(search(listOfgirls, newprince));

console.log(listOfgirls.find(value => value.size === newprince.findshoe));