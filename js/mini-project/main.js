const key = 'key'
localStorage.setItem('key', JSON.stringify([]));
let container = document.getElementById('container')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (let user of value) {
            const userDiv = document.createElement('div')
            userDiv.setAttribute('class', 'inner')
            userDiv.innerHTML = `<h2>UserID: ${user.id}</h2>
            <p>User name: ${user.name}</p>`
            container.appendChild(userDiv)


            const button = document.createElement('button');
            button.setAttribute('class', 'btn');
            button.innerText = 'Show more'
            userDiv.appendChild(button);

            button.onclick = () => {
               const favorites = JSON.parse(localStorage.getItem('key') || []);
               favorites.push(user);
               localStorage.setItem('key',JSON.stringify(favorites));
               button.disabled=true;
                }

            }
            })
