function isVisible(elem) {

    let coords = elem.getBoundingClientRect();
  
    let windowHeight = document.documentElement.clientHeight;
  
    // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  
    return topVisible || bottomVisible;
  }
  
function showVisible() {
    let advBlocks = document.getElementsByClassName('reveal');

    for (let i = 0; i < advBlocks.length; i++) {

      let advBlock = advBlocks[i];

      if (isVisible(advBlock)) {
        advBlock.classList.add('reveal_active');
      }
    }

  }

  showVisible();
  window.onscroll = showVisible;