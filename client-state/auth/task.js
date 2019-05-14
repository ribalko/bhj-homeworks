let signinForm = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let signinButton = document.getElementById('signin__btn');
let xhr = new XMLHttpRequest();

signinButton.addEventListener('click', trySignin);

document.addEventListener("DOMContentLoaded", restoreLogin);

function sayHello(user) {
    welcome.classList.add('welcome_active');
    welcome.innerHTML = `Добро пожаловать, пользователь #<span id="${user}">${user}</span>`;
}

function restoreLogin() {
    let user_id = localStorage.getItem("user_id"); 
    if (user_id != null) {
        sayHello(user_id);
    }
    else {
        signinForm.classList.add('signin_active');
    }
}

function trySignin() {

    event.preventDefault();

    let formData = new FormData(document.forms[0]);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
    
    xhr.send(formData);
    
    xhr.onreadystatechange = function() {
    
        if (xhr.readyState != 4) return;
    
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            let authJSON = JSON.parse(xhr.responseText);
            if (authJSON.success) {
                signinForm.classList.remove('signin_active');
                sayHello(authJSON.user_id);
                localStorage.setItem("user_id", authJSON.user_id);
            }
            else {
                alert('Неверный логин/пароль!');
            }
        }

    }
}


