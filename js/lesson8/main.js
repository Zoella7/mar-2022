// - Напишіть код,  котрий :

// // -- отримує текст з параграфа з id "content"
// // -- замініть текст параграфа з id 'content' на будь-який інший
// // -- змініть кожному елементу колір фону на червоний
// // -- змініть кожному елементу колір тексту на синій
// let getEllem = document.getElementById('content');
// console.log(getEllem.innerText);
// console.log(getEllem.innerText = 'будь-який інший текс');
// getEllem.style.background = 'red';
// getEllem.style.color = 'blue';


// // -- отримує текст з блоку з id "rules"
// let getRul = document.getElementById('rules');
// console.log(getRul.innerText);


// // // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// console.log(document.getElementById('rules').classList);

// // // -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let getClass = document.getElementsByClassName('fc_rules');
// for (const clas of getClass) {
//           clas.style.color = 'red'
//
// }




// Взяти файл template_2.html та працювати в ньому

// // 1) Напишіть код, який :
// // // a) додає клас з назвою групи, елементу з ід main_header
//
// let getellem = document.getElementById('main_header');
// getellem.classList.add('Hello');


// // // b) робить шириниу елементу ul 400px
// //
// let getUl=document.getElementsByTagName('ul');
// for (let element of getUl) {
//     element.style.color = '400px'
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let getli = document.getElementsByClassName('linkList');
// for (let element of getli) {
//     element.style.width = '50%'
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
//
// let get2 = document.getElementsByClassName('listElement2')
// for (let item of get2) {
//     console.log(item.innerText);
// }

// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let getli = document.getElementsByTagName('li')
// for (let element of getli) {
//     element.style.background = 'gray';
// }

// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let getA = document.getElementsByTagName('a');
// for (let aElement of getA) {
//     aElement.classList.add('anchor')
// }

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let getA = document.getElementsByTagName('a');
// for (let aElement of getA) {
//  if( aElement.innerText === 'link3'){
//      aElement.style.fontSize = '40px'
//  }
// }

// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let getA = document.getElementsByTagName('a');
// for (let aElement of getA) {
//     aElement.classList.add(`element_${aElement.innerText}`)
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('Please say your color');
// let elements = document.getElementsByTagName('h3')
// for (let element of elements) {
//     element.style.background = color;
//
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// // Колір отримати з prompt()
//
// let color = prompt('Please say your color');
// let elements =document.getElementsByClassName('sub-header')
// for (let element of elements) {
//     if(element.innerText === 'content 2 segment'){
//         element.style.background = color;
//     }
// }


// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let text = prompt('enter smth')
// let elements = document.getElementsByClassName('content_1')
// for (let element of elements) {
//     element.innerText = text
// }

// // l) отримати елементи p та змінити їм padding на 20px
//
// let getP = document.querySelectorAll('p')
// for (let pElement of getP) {
//     pElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getText = document.getElementsByClassName('text2')
for (let textElement of getText) {
    textElement.innerText = 'mar-2021'
}




