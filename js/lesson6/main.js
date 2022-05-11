// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// //
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// // // // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.trim(' ',''));

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let array = str.split(' ');
// console.log(array);

// // // // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10,8,-7,55,987,-1011,0,1050,0];
//
// let numbers = nums.map(item => item + '')
//
// console.log(numbers);

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності
// // від значення аргументу direction.
//     let nums = [11,21,3];
//
// // console.log(nums.sort((a, b) => a - b));
// console.log(nums.sort((a, b) => b - a))
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]


// // - є масив
// let courses = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(courses.sort((a, b) => a.monthDuration - b.monthDuration));

// // // console.log(courses.filter(item => item.monthDuration > 5));
// // // -- відсортувати його за спаданням за monthDuration
// // // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// //
// // описати колоду карт
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
//
// let card = [
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit:'heart',value: 'joker', color: 'black'},
//     {cardSuit:'clubs', value: 'joker', color: 'red'}
// ]
//
//
// // console.log(card.find(value => value.value === 'joker' && value.color === 'black'));
// // console.log(card.filter(value => value.value === '6'));
// // console.log(card.filter(value => value.color === 'red'));
// // console.log(card.filter(value => value.cardSuit === 'diamond'));
// // console.log(card.filter(value => value.cardSuit === 'clubs' && value.value > '9'));


// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// //     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// console.log(str.toUpperCase().replaceAll(' ', '-'));

//
// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//     let text = 'hello word!!!'
// console.log(text.toUpperCase());

// // - Дано список імен.
// //     let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// console.log(n1.replaceAll('..', ' '));
// console.log(n2.replaceAll('---', ' '));
// console.log(n3.replaceAll('__', ' '));

// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//     let fn =(...arg)=>{
//     let num = []
//         for (let i = 0; i < 20; i++) {
//             num[i] = Math.round(Math.random()*100)
//                    }
//         return num;
//     }
//     console.log(fn());


// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// //     Відсортувати його за допомоги sort
//
// let numbs = [42, 87, 35, 18, 68, 84, 0, 42, 84, 56, 90, 83, 0, 40, 94, 90, 83, 25, 93, 22];
// console.log(numbs.sort((a, b) => (a - b)));


// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// //     відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// let numbs = [42, 87, 35, 18, 68, 84, 0, 42, 84, 56, 90, 83, 0, 40, 94, 90, 83, 25, 93, 22];
// console.log(numbs.filter(value => (value % 2) ===0 && value !== 0));

// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// courses.







