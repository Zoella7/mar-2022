fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');
        for (let post of posts) {
        let divCard = document.createElement('div');
            divCard.setAttribute('class', 'divCard');
            divCard.innerHTML = `<h4>UserId:${post.userId}<h4>
<h4>ID:${post.id}<h4>
<h4>Title:${post.title}<h4>
<p>Body:${post.body}<p>`


            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'Click'

            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (let comment of comments) {

                            if (post.id === comment.postId) {
                                let divCardComments = document.createElement('div');
                                divCardComments.classList.add('comments');
                                divCardComments.innerHTML = `
                                <h4>Name: ${comment.name}</h4>
                                <h4>Email: ${comment.email}</h4>
                                <p>Body: ${comment.body}</p>`;
                                divCard.append(divCardComments)
                            }
                            button.disabled = true;
                        }
                    })

            }
divCard.append(button);
wrap.append(divCard);
document.body.append(wrap)
        }
    })
