// Home work
// //     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let nums =[4, 6, 5]
// let fn = (array) =>{
//     let res = 0;
//     for (let item of array) {
//
//         (res =+ item) / array.length
//             }
//     return res
// }
// console.log(fn(nums));
//
// // // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let nums =[88, 3, 5, 22, 45, 33];
// let fn = (array)=>{
//     let min = array[0];
//     let max = array[0];
//     for (let item of array) {
//         if(item < min){
//             min = item;
//         }
//         if(item > max){
//             max = item;
//         }
//            }
// console.log(max);
//     return min;
// }
// console.log(fn(nums));
//
//
// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let fn = ()=> {
//     let num = []
//     for (let i = 0; i < 10; i++) {
//         num[i]=Math.round(Math.random()*100)
//
//     }
//     return num;
// }
// console.log(fn());
//
// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let fn = (limit)=> {
//     let num = []
//     for (let i = 0; i < limit; i++) {
//         num[i]=Math.round(Math.random()*100)
//
//     }
//     return num;
// }
// console.log(fn(8));
//
//
// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// //
// let num = [1, 2, 3];
// let fn = (array)=>{
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//
//     }
// }
//
// fn(num);
//
//
//
//
// // // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let sqP = (a, b) => ( a + b)*2;
// console.log(sqP(10, 5));
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let arrea = (r) => console.log((r * r) * 3.14);
// arrea(12);
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let cylinder = (h, r) => h * r * 2 * 3.14;
// console.log(cylinder(4, 11));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let list = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// let res = (array) => {
//     for (let item of array) {
//         console.log(`${item}`);
//             }
// }
// res(list);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
//
// let fn = (text) =>document.write(`<p>${text}</p>`)
// fn('Good day');
//
//
// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// //
// let fn = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// fn('Smth')
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let fn = (text) =>{
//
//     document.write(`<ul>`);
//     for (let i = 0; i <3; i++) {
//         document.write(`<li>${text}</li>`);
//           }
//     document.write(`</ul>`);
// }
// fn('Texttt');
//
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     ];
//
// let fn = (array) => {
//     for (let item of array) {
//         console.log(item);
//
//     }
// }
// fn(users);
//
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         age: 23
//              },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         age: 43
//             },
//     {
//         id: 3,
//         name: 'Stiphen Kind',
//         age: 66
//     }
//   ];
//
// let fn = (array) =>{
//     for (let item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//             }
// }
// fn(usersList);
//
//
// - створити функцію яка повертає найменьше число з масиву
// let numb = [3, 5, 2, 8, 9, 2, 4, -4];
//
// let fn = (array) => {
//     let min = array[0];
//     for (let item of array) {
//         if(item < min){
//             min = item;
//         }
// return min;
//
//     }
//
// }
// console.log(fn(numb));
//
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//  let nums =[4, 6, 3];
//
// let fn = (array) =>{
//     let sum = 0;
//     for (let item of array) {
//         let res = sum =sum + item
//
//     }
// }
// console.log(fn(function (nums) {return res}));
//
//
// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями
//
//
// let mas = [
//     {name: "Ira"},
//
//     {age: 45}
// ];
//
// let fn = (array) => {
//     let nnn = array[0];
//     array[0] = array[1];
//     array[1] = nnn;
//     return array;
// }
// console.log(fn(mas));


// // // // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// // //
// let fn = (...arg) =>{
//     let min =arg[0];
//     for (let item of arg) {
//         if(item < min){
//             min = item;
//         }
//     }
//     console.log(min);
// }
// fn(33, 45, 23);

// // // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let fn = (...arg) =>{
//         let max=[0];
//     for (let item of arg) {
//         if (item > max) {
//             max = item;
//         }
//     }
//      console.log(max);
// }
// fn(23, 26, 17);

// // - створити функцію яка повертає найбільше число з масиву
//
// let randnum = [31, 62, 76, 65,48];
//
// let fn = (array)=>{
//     let max = array[0];
//     for (let item of array) {
//         if (item > max){
//             max = item;
//         }
//     }
//     return max;
// }
// console.log(fn(randnum));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let nums = [59,16,29, 45, 79, 13];
// let fn = (array)=>{
//     let res = 0;
//     for (let item of array) {
//         (res+=item);
//                     }
//     return res/array.length
//     }
//     console.log(fn(nums));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// //     а виводить найбільше (Math використовувати заборонено);
//
// let fn = (...arg)=>{
//     let min = arg[0];
//     let max = arg[0];
//     for (let item of arg) {
//         if( item < min){
//             min = item;
//         }
//         if( item > max){
//             max = item;
//                     }
//     }
//     console.log(max);
//     return min;
//
// }
// console.log(fn(55, 32, 11, 44, 23, 45));

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let fn = (...arg)=> {
//     let num = [];
//     for (let i = 0; i < 10; i++) {
//         num[i] = Math.round(Math.random()*100)
//     }
//     return num;
// }
// console.log(fn());

// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// //     limit - аргумент, який характеризує кінцеве значення діапазону.
//  let fn = (limit)=>{
//     let num =[];
//      for (let i = 0; i < limit; i++) {
//          num[i] = Math.round(Math.random()*100);
//             }
//      return num;
//  }
//  console.log(fn(20));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let nums = [ 1, 2, 3];
// let fn = (array)=>{
//     for (let i = array.length - 1; i >= 0; i--) {
//       console.log(array[i]);
//     }
//     }
//     fn(nums);



// // - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     EXAMPLE:
// //        [3,5,7,9]
//
// let mss1= [1,2,3,4];
// let mss2 = [2,3,4,5];
//
// let fn = (ar1, a2)=>{
//     let res = ar1  +',' + ar1
//     return res;
//     }
//
//     console.log(fn(mss1, mss2));

// // - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// //
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let idUser = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// let fn = (array)=>{
//     for (let item of array) {
//            console.log({item.name} {item.age} {item.model});
//     }
// }
// fn(idUser)


