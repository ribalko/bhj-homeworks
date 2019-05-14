
let modalMain = document.getElementById('subscribe-modal');
let modalMainClose = modalMain.getElementsByClassName('modal__close');

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
}
  
function checkPopup() {
    if (getCookie('popupClosed') != 'yes') modalMain.classList.add("modal_active");
}

document.addEventListener("DOMContentLoaded", checkPopup);

modalMainClose[0].addEventListener("click",
  function() {
    modalMain.classList.remove("modal_active");
    document.cookie = 'popupClosed=yes';
  });