async function init(){
    let users = await request('https://next.json-generator.com/api/json/get/N1Cb-dzjB');
    console.log(users);
    let $usersTable = $("#usersTable>tbody");
    for (let user of users){
        $tr = $('<tr>');
        $usersTable.append($tr);
        $tr.append(`
            <td>${user.id}</td>
            <td>${user.age}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>
            <td><button class='btn btn-danger' onclick="deleteMe(this)">DELETE</button></td>
        `);
    }
}

   
function deleteMe(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function drawForm(){
    $myForm = $('#myForm');
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
    <button id='submitBtn' class="btn btn-primary" onclick='addPersonToTable()'>Submit</button>
    `);
}

function addPersonToTable(){
    let $usersTable = $('#usersTable>tbody');
    let table = document.getElementById('usersTable');

    
    if (table.rows[ table.rows.length - 1 ].cells[0] === undefined){
       var userId = 0;
    }
    else{
        var userId = table.rows[ table.rows.length - 1 ].cells[0].innerHTML;
    }
    console.log(userId);
    let userAge = document.getElementById('age').value;
    let userName = document.getElementById('firstname').value;
    let userLastname = document.getElementById('lastname').value;
    let userEmail = document.getElementById('email').value;

    if(userAge != "" && userName != "" && userLastname != "" && userEmail != ""){
        if (typeof (parseInt(userAge, 10) == "number")){
            if(validateEmail(userEmail)){
                $tr = $('<tr>');
                $usersTable.append($tr);
                $tr.append(`
                    <td>${parseInt(userId, 10) + 1}</td>
                    <td>${userAge}</td>
                    <td>${userName}</td>
                    <td>${userLastname}</td>
                    <td>${userEmail}</td>
                    <td><button class='btn btn-danger' onclick="deleteMe(this)">DELETE</button></td>
                `);

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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

init();
drawForm();