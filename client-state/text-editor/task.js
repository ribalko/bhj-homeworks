const textField = document.getElementById('editor');

function restoreForm() {
    textField.value = localStorage.getItem("savedText");
    textField.addEventListener("keypress", function() {localStorage.setItem("savedText", textField.value);});    
}

document.addEventListener("DOMContentLoaded", restoreForm);