const timerElement = document.getElementById('timer');
let curTime = timerElement.textContent;


countDown = setInterval(function() { curTime = curTime - 1; timerElement.textContent = curTime; if (curTime == 0) {clearInterval(countDown); alert('Вы победили в конкурсе!');} }, 1000);