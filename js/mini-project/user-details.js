const key = 'key'
const container = document.getElementById('container');

const details = JSON.parse(localStorage.getItem('key') || []);
details.forEach(detail => {
    const divDetail = document.createElement('div');
    divDetail.setAttribute('class', 'userBox')
    content = document.createElement('div');
    for (let Key in detail) {
        let innerDiv = document.createElement('div')

        if (typeof detail[Key] !== 'object') {
            innerDiv.innerText = `${Key}: ${detail[Key]}`
        } else {
            innerDiv.innerText = `${Key}`;
            for (let item in detail[Key]) {
                let itemDiv = document.createElement('div')

                if (typeof detail[Key][item] !== 'object') {
                    itemDiv.innerText = `${item}: ${detail[Key][item]}`;
                } else {
                    itemDiv.innerText = `${item}`;

                    for (let itemElementKey in detail[Key][item]) {
                        let itemElem = document.createElement('div');
                        itemElem.innerText = `${itemElementKey}: ${detail[Key][item][itemElementKey]}`
                    }
                }
                innerDiv.appendChild(itemDiv);
            }
        }
        divDetail.appendChild(innerDiv);
    }
    container.appendChild(divDetail);


    let button = document.createElement('button')
    button.classList.add('btn')
    divDetail.append(button)
    button.innerText = 'Post of current user'
    button.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                for (let post of value) {
                    let postDiv = document.createElement('div')
                    if (detail.id === post.userId) {
                        postDiv.innerHTML = `<p> title: ${post.title}</p>`
                    }

                    divDetail.appendChild(postDiv)

                    button.disabled = true;


                    if (detail.id === post.userId) {
                        innerBtn = document.createElement('button');
                        postDiv.append(innerBtn);
                        innerBtn.innerHTML = `<a href="post-details.html" style="text-decoration: none"> see more</a>`

                    localStorage.setItem('key2', JSON.stringify([]));
                    innerBtn.onclick = () => {
                        const favorites = JSON.parse(localStorage.getItem('key2') || []);
                        favorites.push(post);
                        localStorage.setItem('key2', JSON.stringify(favorites));
                        button.disabled = true;
                    }
                }
                    }
                })
            }
})



