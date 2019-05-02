const bookElement = document.getElementById('book');
const sizeElements = document.querySelectorAll('.font-size');

for (let i = 0; i < sizeElements.length; i++) {

    sizeElements[i].addEventListener('click',
        function() {
            
            // Зададим размер шрифта
            if (bookElement.classList.contains('book_fs-small')) {
                bookElement.classList.remove('book_fs-small');
            }
            else if (bookElement.classList.contains('book_fs-big')) {
                bookElement.classList.remove('book_fs-big');
            }

            if (event.target.hasAttribute('data-size')) {
                bookElement.classList.add('book_fs-' + event.target.dataset.size);
            }

            //Отметим, если необходимо, кружочком размер в меню
            if (!(event.target.classList.contains('font-size_active'))) {
                for (let j = 0; j < sizeElements.length; j++) {
                    if (sizeElements[j].classList.contains('font-size_active')) {
                        sizeElements[j].classList.remove('font-size_active');
                    }
                }
                event.target.classList.add('font-size_active');
            }

            event.preventDefault();            
        }
    );

}