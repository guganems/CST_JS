class Request {
    constructor (url){
        this.url = url;
    }

    request(url = this.url) {
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.onreadystatechange = function () {
                if (req.readyState === 4) {
                    if (req.status === 200) {
                        resolve(JSON.parse(req.responseText))
                    } else {
                        reject(req)
                    }
                }
            };
            req.setRequestHeader("Content-Type", "application/json");
            req.send();
        });
    }
}

class UI {
    static drawUserList (table, users){
        for (let user of users){
            let $tr = $('<tr>');
            table.append($tr);
            $tr.append(`
                <td>${user.id}</td>
                <td>${user.age}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.email}</td>
                <td><button class='btn btn-danger' onclick="User.deleteMe(this)">DELETE</button></td>
            `);
        }
    }

    static drawForm(){
        let $myForm = $('#myForm');
        var $usersTable = $("#usersTable>tbody");
        $myForm.append(`
        <form>
            <div class="form-group">
                Firstname
                <input class="form-control" id="firstname" placeholder="Firstname" type="text">
            </div>
            <div class="form-group">
                Lastname
                <input class="form-control" id="lastname" placeholder="Lastname" type="text">
            </div>
            <div class="form-group">
                Age
                <input class="form-control" id="age" placeholder="Enter your age" type="text">
            </div>
            <div class="form-group">
                Email
                <input class="form-control" id="email" placeholder="Enter your valid email address" type="text">
            </div>
            <small>We'll never share your email with anyone else</small><br /><br />
        </form>
        <button id='submitBtn' class="btn btn-primary" onclick='UI.createPerson()'>Submit</button>
        `);
    }
    
    static createPerson (){
        let userAge = document.getElementById('age').value;
        let userName = document.getElementById('firstname').value;
        let userLastname = document.getElementById('lastname').value;
        let userEmail = document.getElementById('email').value;

        if(userAge != "" && userName != "" && userLastname != "" && userEmail != ""){
            if (typeof (parseInt(userAge, 10) == "number")){
                if(UI.validateEmail(userEmail)){
                    let newUser = new User(userAge, userName, userLastname, userEmail);
                    console.log(newUser);

                    document.getElementById('firstname').value = "";
                    document.getElementById('lastname').value = "";
                    document.getElementById('age').value = "";
                    document.getElementById('email').value = "";
                }
                else{
                    alert("Use Valid Email!");
                }

            }
            else{
                alert("Age must be Number!");
            }
        }
        else{
            alert("Fill the Form!");
        }
    }

    static validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    deleteMe(btn){
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}


class User {
    constructor (age, firstname, lastname, email){
        this.age = age;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.addUserToTable();
    }

    static deleteMe(btn){
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    addUserToTable(){
        let table = document.getElementById('usersTable');

    
        if (table.rows[ table.rows.length - 1 ].cells[0] === undefined){
           var userId = 0;
        }
        else{
            var userId = table.rows[ table.rows.length - 1 ].cells[0].innerHTML;
        }

        let $usersTable = $("#usersTable>tbody");
        let $tr = $('<tr>');
        $usersTable.append($tr);
        $tr.append(`
            <td>${parseInt(userId, 10) + 1}</td>
            <td>${this.age}</td>
            <td>${this.firstname}</td>
            <td>${this.lastname}</td>
            <td>${this.email}</td>
            <td><button class='btn btn-danger' onclick='User.deleteMe(this)'>DELETE</button></td>
        `);
    }
}

async function init(){
    req = new Request("https://next.json-generator.com/api/json/get/N1Cb-dzjB");
    let users = await req.request();

    let $usersTable = $("#usersTable>tbody");
    UI.drawUserList($usersTable, users);
    UI.drawForm();

    let table = document.getElementById('usersTable');
    console.log(await req.request());
}

init();