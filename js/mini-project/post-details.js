let wrap = document.createElement('div');
wrap.setAttribute('class', 'wrap')
const posts = JSON.parse(localStorage.getItem('key2') || []);
posts.forEach(detail => {
    const divpost = document.createElement('div');
    divpost.setAttribute('class', 'postBox')
    divpost.innerHTML =`<h3> UserId: ${detail.userId}<h3>
<h4> Id: ${detail.id}<h4>
<h5> Title: ${detail.title}<h5>
<p> UserId: ${detail.body}<p>`;

            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'Click'

            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (let comment of comments) {

                            if (detail.userId === comment.postId) {
                                let divCardComments = document.createElement('div');
                                divCardComments.classList.add('comments');
                                divCardComments.innerHTML = `
                                <h4>Name: ${comment.name}</h4>
                                <h4>Email: ${comment.email}</h4>
                                <p>Body: ${comment.body}</p>`;
                                divpost.append(divCardComments)
                            }
                            button.disabled = true;

                        }
                    })

            }
divpost.append(button);
wrap.append(divpost);
document.body.append(wrap)
        })

