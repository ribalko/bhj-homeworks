let subMenus = document.querySelectorAll('.menu_sub');

for(let i = 0; i < subMenus.length; i++) {
    let subMenuA = subMenus[i].previousSibling.previousSibling;

    subMenuA.addEventListener("click",function() {
        event.preventDefault();
        if(subMenus[i].classList.contains('menu_active')) {
            subMenus[i].classList.remove('menu_active');
        }
        else {
            subMenus[i].classList.add('menu_active');
        }        
    });    

    subMenuA.addEventListener("blur",function() {
        if(subMenus[i].classList.contains('menu_active')) {
            subMenus[i].classList.remove('menu_active');
        }
    });       

}