
let modalMain = document.getElementById('modal_main');
let modalMainClose = modalMain.getElementsByClassName('modal__close');
let modalSuccess = document.getElementById('modal_success');
let modalSuccessClose = modalSuccess.getElementsByClassName('modal__close');
let showSuccess = document.getElementsByClassName('show-success');

modalMain.classList.add("modal_active");

showSuccess[0].addEventListener("click", function() { modalSuccess.classList.add("modal_active"); modalMain.classList.remove("modal_active"); } );
modalMainClose[0].addEventListener("click", function() { modalMain.classList.remove("modal_active"); } );
modalSuccessClose[0].addEventListener("click", function() { modalSuccess.classList.remove("modal_active"); } );