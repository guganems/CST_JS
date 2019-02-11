async function init(){
    let users = await request("https://jsonplaceholder.typicode.com/users");
    console.log(users);

    $userContainer = $('#userContainer');

    for (let user of users){
        card = document.createElement('div');
        card.innerHTML = `
        <div class="card" style="width: 18rem; margin: 5px">
        <img class="rounded-circle" src=" https://randomuser.me/api/portraits/women/${user.id}.jpg " alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text"><i class="fa fa-phone-square" aria-hidden="true"></i>${user.phone}</p>
          <p class="card-text"><i class="fa fa-envelope-square" aria-hidden="true"></i>${user.email}</p>
          <p class="card-text"><i class="fa fa-globe" aria-hidden="true"></i><a href="${user.website}">
          ${user.website}</a></p>
          <p align='right'><small>Last Updated ${randomNumber()} ${randomText()} ago</small></p>
          <button class="btn btn-outline-primary" onclick="updatePersonInfo(this);">Update</button>
          <button class="btn btn-outline-danger" onclick="deleteUser(this)">Delete</button>
        </div>
      </div>
        `;

        card.dataset.username = user.username;
        card.dataset.email = user.email;
        card.dataset.phone = user.phone;
        card.dataset.website = user.website;
        $userContainer.append(card);
        
    }

    // File Preview
    const $fileInput = $("#avatarUpload");
    $fileInput.change(function ($ev) {
        console.log(this.files);

        const reader = new FileReader();
        reader.onload = function(){
            console.log(reader.result);
            url = reader.result;
            $('#uploadPreview').attr('src', reader.result);
        }
        reader.readAsDataURL(this.files[0]);
    });
}

function randomText(){
    var myArray = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];

    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
}

function randomNumber(){
    return Math.floor(Math.random() * 20) + 1  
}

function addUser(){
    $('#userDialog').modal();
    let modalTitle = document.getElementById('modalTitleId');
    modalTitle.innerHTML = 'Add new user';
    action = "NEW_POST";
    // add a user
    
}

function updatePersonInfo(me){
    $('#userDialog').modal();
    let personName = me.parentNode.childNodes[1].innerHTML;
    let modalTitle = document.getElementById('modalTitleId');
    modalTitle.innerHTML = `Update User: ${personName}`;
    // console.log(me.parentNode.childNodes[1].innerHTML);

    // Populate user info
    document.getElementById('uploadPreview').src = me.parentNode.parentNode.childNodes[1].src;
    document.getElementById('nameInput').value = me.parentNode.childNodes[1].innerHTML;
    document.getElementById('usernameInput').value = me.parentNode.parentNode.parentNode.dataset.username;
    document.getElementById('emailInput').value = me.parentNode.parentNode.parentNode.dataset.email;
    document.getElementById('phoneInput').value = me.parentNode.parentNode.parentNode.dataset.phone;
    document.getElementById('websiteInput').value = me.parentNode.parentNode.parentNode.dataset.website;


    console.log(me.parentNode.childNodes[5]);

    action = "EDIT_POST";
    card = me.parentNode.parentNode.parentNode;
}

function deleteUser(me){
    myParent = me.parentNode.parentNode.parentNode;
    myParent.removeChild(me.parentNode.parentNode);
}

document.getElementById('saveButton').addEventListener('click', function(e){
    // console.log(document.getElementById('uploadPreview').src);
    if(action == "NEW_POST"){
        // console.log("test");
        $userContainer = $('#userContainer');
        card = document.createElement('div');
        card.innerHTML = `
        <div class="card" style="width: 18rem; margin: 5px">
        <img class="rounded-circle" src="${document.getElementById('uploadPreview').src}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${document.getElementById('nameInput').value}</h5>
            <p class="card-text"><i class="fa fa-phone-square" aria-hidden="true"></i>${document.getElementById('phoneInput').value}</p>
            <p class="card-text"><i class="fa fa-envelope-square" aria-hidden="true"></i>${document.getElementById('emailInput').value}</p>
            <p class="card-text"><i class="fa fa-globe" aria-hidden="true"></i><a href="${document.getElementById('websiteInput').value}">
            ${document.getElementById('websiteInput').value}</a></p>
            <p align='right'><small>Last Updated ${randomNumber()} ${randomText()} ago</small></p>
            <button class="btn btn-outline-primary" onclick="updatePersonInfo(this);">Update</button>
            <button class="btn btn-outline-danger" onclick="deleteUser(this)">Delete</button>
        </div>
        </div>
        `;

        card.dataset.username =  document.getElementById('usernameInput').value;
        card.dataset.email = document.getElementById('emailInput').value;
        card.dataset.phone = document.getElementById('phoneInput').value;
        card.dataset.website = document.getElementById('websiteInput').value;
        $userContainer.append(card);
    }
    else if(action == "EDIT_POST"){
        console.log(card);
        // $userContainer = $('#userContainer');
        card.innerHTML = `
        <div class="card" style="width: 18rem; margin: 5px">
        <img class="rounded-circle" src="${document.getElementById('uploadPreview').src}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${document.getElementById('nameInput').value}</h5>
            <p class="card-text"><i class="fa fa-phone-square" aria-hidden="true"></i>${document.getElementById('phoneInput').value}</p>
            <p class="card-text"><i class="fa fa-envelope-square" aria-hidden="true"></i>${document.getElementById('emailInput').value}</p>
            <p class="card-text"><i class="fa fa-globe" aria-hidden="true"></i><a href="${document.getElementById('websiteInput').value}">
            ${document.getElementById('websiteInput').value}</a></p>
            <p align='right'><small>Last Updated ${randomNumber()} ${randomText()} ago</small></p>
            <button class="btn btn-outline-primary" onclick="updatePersonInfo(this);">Update</button>
            <button class="btn btn-outline-danger" onclick="deleteUser(this)">Delete</button>
        </div>
        </div>
        `;

        card.dataset.username =  document.getElementById('usernameInput').value;
        card.dataset.email = document.getElementById('emailInput').value;
        card.dataset.phone = document.getElementById('phoneInput').value;
        card.dataset.website = document.getElementById('websiteInput').value;
    }

    $('#userDialog').modal('hide');
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

init();