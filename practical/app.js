async function init() {
    let users = await request('https://jsonplaceholder.typicode.com/users');
    console.log(users);
    let $userTbody = $("#usersTable>tbody");
    for (let user of users) {
        $tr = $('<tr>');
        $tr.data("user", user);
        $userTbody.append($tr);
        $tr.append(`
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
        `);
    }

    $("#usersTable>tbody>tr").click(async function(){
        let $this = $(this);
        let posts = await request(`https://jsonplaceholder.typicode.com/posts?userId=${$this.data("user").id}`);

        let $postsTable = $("#postsTable>tbody");
        $postsTable.html("");
        $tr = $('<tr>');
        $postsTable.append($tr);
        $tr.append(`
            <th>ID</th>
            <th>title</th>
            <th>body</th>
        `);
        for (let post of posts){
            $tr = $('<tr>');
            $tr.data("post", post);
            $postsTable.append($tr);
            $tr.append(`
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            `);
        }
    });

    var postsTableTr = document.getElementById('postsTable');
    $("#postsTable>tbody").on("click", "tr", async function(){
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        let $this = $(this);
        let comments = await request(`https://jsonplaceholder.typicode.com/posts/${$this.data('post').id}/comments`);

        let $commentsTable = $("#commentsTable>tbody");
        $commentsTable.html("");
        $tr = $('<tr>');
        $commentsTable.append($tr);
        $tr.append(`
            <th>ID</th>
            <th>title</th>
            <th>body</th>
        `);
        for (let comment of comments){
            $tr = $('<tr>');
            $commentsTable.append($tr);
            $tr.append(`
                <td>${comment.id}</td>
                <td>${comment.name}</td>
                <td>${comment.body}</td>
            `);
        }


        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    users.forEach(async user => {
        //@todo Draw user detail
        let postsForEachUser = await request(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        //console.log(postsForEachUser);
        //@todo Draw posts as a separate list and show posts on user list item click
        postsForEachUser.forEach(async post => {
            let comments = await request(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            //console.log(comments);
            //@todo On post click show comments dialog
        });

    });
    //@TODO remove (DELETE BUTTON)
}




console.log("before init");
init();
console.log("after init");

/*
// Promise chain
request('https://jsonplaceholder.typicode.com/users')
    .then((users) => {
        const promises = [];
        users.forEach(user => {
            //@todo Draw user detail
            const p = request(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            promises.push(p);
        });
        return Promise.all(promises)
    })
    .then((postsByUser) => {
        console.log("Posts ", postsByUser);
        let promises = [];
        postsByUser.forEach(posts => {
            //@todo Draw posts as a separate list and show posts on user list item click
            posts.forEach(post => {
                let p = request(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
                promises.push(p);
            });
        });

        return Promise.all(promises);
    })
    .then(comments => {
        //@todo On post click show comments dialog
        console.log("Comments ", comments);
    })
    .catch((response) => {
        console.log("catch ", response);
    })
;*/

/*
// Nested callbacks
request('https://jsonplaceholder.typicode.com/users', (users) => {
    console.log(users);
    request(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`, (posts) => {
        console.log(posts);
        request(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`, (comments) => {
            console.log(comments);
            request(`https://jsonplaceholder.typicode.com/todos?userId=${users[0].id}`, (todos) => {
                console.log(todos);
            })
        })
    })
});
*/
