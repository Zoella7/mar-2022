// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
// let mainpost = document.getElementById('mainpost')
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(value => {
//         for (let item of value) {
//             let div = document.createElement('div');
//             div.style.border = '1px solid black'
//             div.innerHTML = `<h3>${item.id}<h3>
//             <h2>${item.title}</h2>
//             <p>${item.body}</p>`
//
//           mainpost.appendChild(div)
//             if(item.id % 2 === 0){
//                 div.style.color ='red'
//             }
//         }
//     })




// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let main = document.createElement('div')
main.classList.add('comment')
main.style.padding = '20px'
main.classList.add('block')
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => {
        for (let item of value) {
            let divElem = document.createElement('div');
            divElem.style.border = '1px solid grey'
            divElem.innerHTML = `<h3>${item.name}<h3>
             <h2>${item.email}</h2>
             <p>${item.body}</p>`

            main.append(divElem)
            document.body.append(main)
        }
    })
