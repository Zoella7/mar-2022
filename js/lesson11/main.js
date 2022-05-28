// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
//
//
// let form= document.getElementById('form1')
// let button = document.getElementById('button')
// button.addEventListener('click', function () {
//    let username= form.name.value;
//     let userage= form.age.value;
//     let userDate = {name: username, age: userage};
//     // console.log(userDate);
//     //    localStorage.setItem('user', JSON.stringify(userDate))
//
// })



// // -створити форму з інпутами для model,type та volume автівки.
// //     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// let form = document.getElementById('form1')
// let button = document.getElementById('button');
// button.addEventListener('click', function (e) {
//     e.preventDefault()
//     let model = form.model.value;
//     let type = form.type.value;
//     let volume = form.volume.value;
//     let date = [model, type, volume];
//     console.log(date);
//
// })