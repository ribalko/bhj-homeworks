let tabs = document.querySelectorAll('.tabs');

for(let i = 0; i < tabs.length; i++) {
    let tabsMenu = tabs[i].querySelectorAll('.tab');
    let tabsContent = tabs[i].querySelectorAll('.tab__content');
    for(let i = 0; i < tabsMenu.length; i++) {
        tabsMenu[i].addEventListener("click",function() {
            for(let j = 0; j < tabsMenu.length; j++) {
                if(tabsMenu[j].classList.contains('tab_active')) {
                    tabsMenu[j].classList.remove('tab_active');
                    tabsContent[j].classList.remove('tab__content_active');
                }
            }
            tabsMenu[i].classList.add('tab_active');
            tabsContent[i].classList.add('tab__content_active');
        });    
    }
}