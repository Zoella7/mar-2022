// // - Создать произвольный елемент с id = text.  Используя JavaScript,
// // сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let text = document.getElementsByClassName('text')[0];
// console.log(text);
// text.onclick = function () {
//     console.log(text.innerHTML = '');
// }


// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// //     та повідомити про це користувача
// let input = document.getElementById('inp1')
// let button = document.getElementById('btn')
// button.onclick = function () {
//         if(input.value >= 18) {
//         console.log('ok');
//     }else{
//         console.log('too young');
//     }
// input.value = ''
// }


// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// // інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.getElementById('butn')
// button.addEventListener('click', function () {
//     console.log(document.forms.form1.username.value);
//     console.log(document.forms.form1.email.value);
//     console.log(document.forms.form2.password.value);
//     console.log(document.forms.form2.age.value);
// });


// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додаткова частина для завдання)
//
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'submit'
// document.body.append(input1, input2, input3, button);
//
// button.addEventListener('click', function () {
//     const tr = input1.value;
//     const td = input2.value;
//     const inputtext = input3.value;
//
//     function creatorTable(tr, td, text) {
//         let table = document.createElement('table')
//         document.body.append(table);
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr')
//             table.appendChild(tr);
//
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td')
//                 td.innerText = `${text}`
//                 td.style.border = '1px solid black';
//                 tr.appendChild(td)
//
//             }
//
//         }
//
//
//     }
//
//     creatorTable(tr, td, inputtext)
//
// })


let menuEle= document.getElementsByClassName('menu')[0];
let titleEle = document.getElementsByClassName('title')[0];
titleEle.onclick= function (){

    menuEle.classList.toggle('hidden')
}
