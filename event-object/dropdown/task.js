
let valueElements = document.querySelectorAll('.dropdown__value');
let ulElements = document.querySelectorAll('ul.dropdown__list');

for(let i = 0; i < valueElements.length; i++){
    valueElements[i].addEventListener("click",function() { if(ulElements[i].classList.contains('dropdown__list_active')) {ulElements[i].classList.remove('dropdown__list_active');} else {ulElements[i].classList.add('dropdown__list_active');} });
    ulElements[i].addEventListener("click",function() {event.preventDefault(); valueElements[i].innerHTML = event.target.innerText; ulElements[i].classList.remove('dropdown__list_active');});    
}