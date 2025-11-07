const inputAll = document.querySelectorAll('input, textarea');
const rez_obj = {}
const btn = document.querySelector('.btn');

inputAll.forEach((input)=>{
    input.addEventListener('change',()=>{
        rez_obj[input.name] = input.type === 'checkbox' ? input.checked : input.value;
    })
})

const SpecialChars = /[@#$%&*()_+=]/;

btn.addEventListener('click',(e)=>{
    
    e.preventDefault()
    let valid = true;

    inputAll.forEach((input)=>{

        if(input.value.length == 0){
            input.classList.add('input-disabled')
            valid = false;
            return;
        }else{
            input.classList.remove('input-disabled')
        }

        if (input.type !== 'checkbox' && input.type !== 'radio' && (input.value.length < 5 || input.value.length > 30)) {
            input.classList.add('input-disabled');
            valid = false;
            return;
        }else if(input.type !== 'checkbox' && input.type !== 'radio'){
            input.classList.remove('input-disabled')
        }

        if (input.name !== 'email' && SpecialChars.test(input.value)) {
            console.log('ошибка 3')
            input.classList.add('input-disabled');
            valid = false;
            return;
        }else if(input.name !== 'email'){
            input.classList.remove('input-disabled')
        }


    if(input.type == 'radio'){
        const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
        let isChecked = false;
    
        radioGroup.forEach(radio => {
            if(radio.checked) {
                isChecked = true;
            }
        });
    
        const fieldset = input.closest('fieldset');
        const allLabels = fieldset.querySelectorAll('label');
    
        if(!isChecked) {
            allLabels.forEach((label) => {
                label.classList.add('input-disabled');
            });
        valid = false;
        } else {
            allLabels.forEach((label) => {
                label.classList.remove('input-disabled');
            });
        }
    }
});
    if(valid){
        console.log(rez_obj)
    }
});