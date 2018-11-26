var posts = [];
async function init() {
    let users = await request('https://jsonplaceholder.typicode.com/users');
    console.log(users);
    drawUsers(users);
    users.forEach(async user => {
        //@todo Draw user detail
        let postsForEachUser = await request(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        getPosts(postsForEachUser, posts);
        //console.log(postsForEachUser);
        //@todo Draw posts as a separate list and show posts on user list item click
        postsForEachUser.forEach(async post => {
            let comments = await request(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            //console.log(comments);
            //@todo On post click show comments dialog
        });
    });
}

console.log("before init");
init();
console.log("after init");

function drawUsers(users){
    var table = document.getElementById('tableForUsers');
    var tr = document.createElement('tr');
    var thId = document.createElement('th');
    var thName = document.createElement('th');
    var thUsername = document.createElement('th');
    var thEmail = document.createElement('th');
    var thAddress = document.createElement('th');
    var thAction = document.createElement('th');
    

    thId.innerHTML = "ID";
    thName.innerHTML = "Name";
    thUsername.innerHTML = "username";
    thEmail.innerHTML = "E-mail";
    thAddress.innerHTML = "Street";
    thAction.innerHTML = "Action";

    table.append(tr);
    tr.append(thId);
    tr.append(thName);
    tr.append(thUsername);
    tr.append(thEmail);
    tr.append(thAddress);
    tr.append(thAction);

    for(let i = 0; i < users.length; i++){
        var newTr = document.createElement('tr');
        table.append(newTr);

        var tdId = document.createElement('td');
        tdId.innerHTML = users[i].id;
        newTr.append(tdId);

        var tdName = document.createElement('td');
        tdName.innerHTML = users[i].name;
        newTr.append(tdName);

        var tdUsername = document.createElement('td');
        tdUsername.innerHTML = users[i].username;
        newTr.append(tdUsername);

        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = users[i].email;
        newTr.append(tdEmail);

        var tdAddress = document.createElement('td');
        tdAddress.innerHTML = users[i].address.street;
        newTr.append(tdAddress);
        
        var tdAction = document.createElement('td');
        tdAction.innerHTML = `<button id=${users[i].id} class='btn btn-success' onclick='showPosts(this.id)'>Posts</button>`;
        newTr.append(tdAction);
    }   
}


function getPosts(postsFromPromise, myPosts){
    for (let i = 0; i < postsFromPromise.length; i++){
        myPosts.push(postsFromPromise[i]);
    }

    return myPosts;
}



function showPosts(id){
    var postsDiv = document.getElementById('postsDiv');
    postsDiv.innerHTML = "";

    for (let i = 0; i < posts.length; i++){
        if (posts[i].userId == id){
            var anchor = document.createElement('a');
            postsDiv.append(anchor);
            anchor.innerHTML += posts[i].title + "<hr />";
            anchor.setAttribute('href', '#');
        }
    }
}



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
