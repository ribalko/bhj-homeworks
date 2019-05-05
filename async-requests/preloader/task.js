let loader = document.getElementById('loader');
let currency = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);

xhr.send();

xhr.onreadystatechange = function() {

    if (xhr.readyState != 4) return;

    loader.classList.remove('loader_active');

    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    }
    else {
        let exchangeCurrency = JSON.parse(xhr.responseText).response.Valute;
        for (let key in exchangeCurrency) {
            currency.innerHTML += 
            `<div class="item">
                <div class="item__code">
                    ${exchangeCurrency[key].CharCode}
                </div>
                <div class="item__value">
                    ${exchangeCurrency[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`
        }
    }

}

