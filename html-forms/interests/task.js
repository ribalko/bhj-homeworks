const checkboxes = document.querySelectorAll('.interest__check');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change',
    function() {
        let parentUl = event.target.closest('ul');
        if (parentUl.closest('li') != null) {
            let parentCheckbox = parentUl.closest('li').querySelector('.interest__check');;
            if (parentCheckbox != null) {
                let childCheckboxes = parentUl.querySelectorAll('.interest__check');
                let checkedChilds = parentUl.querySelectorAll('.interest__check:checked');
                console.log(checkedChilds.length === childCheckboxes.length);            
                if (checkedChilds.length === 0) {
                    parentCheckbox.checked = false;
                    parentCheckbox.indeterminate = false;                        
                }
                else if  (checkedChilds.length === childCheckboxes.length) {
                    parentCheckbox.checked = true;  
                    parentCheckbox.indeterminate = false;                                  
                }
                else {
                    parentCheckbox.indeterminate = true;
                }
            }
        }
    });
}