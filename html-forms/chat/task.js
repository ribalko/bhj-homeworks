const messages = document.querySelector( '.chat-widget__messages' );
const chatBage = document.querySelector( '.chat-widget' );

const aiBase = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет','Мы не будем ва м ничего продавать!','Добрый день! До свидания!','К Сожалению, все операторы сейчас заняты. Не пишите нам больше!','Где ваша совесть?','Вас плохо слышно! Пшшш пшшш.'];

let options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

chatBage.addEventListener('click', function() { chatBage.classList.add("chat-widget_active");});

function randomInteger(min = 0, max = aiBase.length - 1) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function botMsg() {
    let curDate = new Date();
    curDate = curDate.toLocaleString("ru", options);
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">` +
      curDate
      + `</div>
      <div class="message__text">` +
      aiBase[randomInteger()]
      + `</div>
    </div>
  `;
}


function sendMsg(e) {
    let tb = document.getElementById("chat-widget__input");
    if ((e.keyCode == 13) && (tb.value != '')) {
        let curDate = new Date();
        curDate = curDate.toLocaleString("ru", options);
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">` +
            curDate
            + `</div>
            <div class="message__text">` +
            tb.value
            + `</div>
        </div>
        `;        
        tb.value = '';
        botMsg();
        return false;
    }
}

