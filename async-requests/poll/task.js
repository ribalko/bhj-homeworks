let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);

xhr.send();

xhr.onreadystatechange = function() {

    if (xhr.readyState != 4) return;

    pollAnswers.innerHTML = '';

    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    }
    else {
        let pollJSON = JSON.parse(xhr.responseText);
        let answersJSON = pollJSON.data.answers;
        pollTitle.innerText = pollJSON.data.title;
        for (let key in answersJSON) {
            pollAnswers.innerHTML += `
            <button class="poll__answer" onclick="alert('Спасибо, ваш голос принят!');">
              ${answersJSON[key]}
            </button>            
            `
        }
    }

}