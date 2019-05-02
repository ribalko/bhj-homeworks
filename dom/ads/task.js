const phrases = document.querySelectorAll('.rotator__case');

let i = 0;
setInterval(function() {
    phrases[i].classList.remove('rotator__case_active');
    i = (i === phrases.length - 1) ? 0 : i + 1 ;
    phrases[i].classList.add('rotator__case_active');    
}, 1000);

