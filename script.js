let elUserList = document.querySelector("#user_list");
let elPostList = document.querySelector("#post_list");
let elCommentList = document.querySelector("#comment_list");


async function userRender(element) {
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    console.log(data);

    if (data) {
        data.forEach(user => {
            newLi = document.createElement("li")
            newh3 = document.createElement("h3")
            newp = document.createElement("p")
            newLi.setAttribute("class", "px-3 py-1  border")
            newLi.dataset.id = user.id;
            newh3.textContent = user.name;
            newp.textContent = user.username;
            newLi.append(newh3, newp);

            newLi.addEventListener("click", (evt) => {
                let id = evt.target.dataset.id
                postRender(id, elPostList);
            })
            element.append(newLi)

        });
    }


}
userRender(elUserList);

async function postRender(id, element) {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    console.log(data);

    if (data) {
        elPostList.innerHTML = null
        let UserPost = data.filter((post) => post.userId == id)

        UserPost.forEach(post => {


            console.log(post);

            newLi = document.createElement("li")
            newh2 = document.createElement("h2")
            newh3 = document.createElement("h3")
            newp = document.createElement("p")

            newLi.setAttribute("class", "px-3 py-1  border")
            newh2.textContent = `User ${post.userId}`
            newh3.textContent = post.title;
            newp.textContent = post.body;
            newLi.append(newh3, newp, newh2);
            newLi.dataset.id = post.id;




            newLi.addEventListener("click", (evt) => {

                let id = evt.target.dataset.id
                postRender(id, elCommentList);

            })
            element.append(newLi)

        });
    }


}
// postRender(id, elPostList);

async function commentRender(id, element) {
    let data = await fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    console.log(data);
    if (data) {
        let UserCommen = data.filter((comment) => comment.userId == id)
        // let UserPost = data.filter((comment) => comment.postId == id)
        // elPostList.innerHTML = null

        UserCommen.forEach(comment => {


            console.log(post);

            newLi = document.createElement("li")
            newh2 = document.createElement("h2")
            newh3 = document.createElement("h3")
            newp = document.createElement("p")

            newLi.setAttribute("class", "px-3 py-1  border")
            newh2.textContent = `Post ${comment.postId}`
            newh3.textContent = comment.name;
            newp.textContent = comment.email;
            newLi.append(newh3, newp, newh2);

            element.append(newLi)
        });

    }


}
// postRender(id, elCommentList);