aList = document.querySelectorAll('a.has-tooltip');

for (let i = 0; i < aList.length; i++) {
    aList[i].addEventListener('click', showHideTooltip);
}

function showHideTooltip(e) {
    e.preventDefault();
    let fullA = this.outerHTML;
    let topPosition = Number(this.getBoundingClientRect().top) + Number(this.getBoundingClientRect().height);
    
    fullA += `<div class="tooltip tooltip_active" style="left: ` + this.getBoundingClientRect().left + `px ; top: ` + topPosition + `px;">`
        +  this.getAttribute('title')
        + `</div>`;

    this.outerHTML = fullA;
}