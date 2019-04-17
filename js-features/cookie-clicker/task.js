const cookieElement = document.getElementById('cookie');

function cookieClick() {
    const cookieElement = document.getElementById('cookie');
    const counterElement = document.getElementById('clicker__counter');
//  const speedElement = document.getElementById('clicker__speed');
    counterElement.textContent = Number(counterElement.textContent) + 1;
//    curTime = new Date();
    if (cookieElement.width == 200) {    
        cookieElement.width = 220;
    }        
    else {
        cookieElement.width = 200;
    }
}

cookieElement.addEventListener("click", cookieClick);