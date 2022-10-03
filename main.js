const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('.container__content__form__email');
const error = document.querySelector('.container__content__form__email--error');


const validateEmail = (email) => {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(email) == true){
        console.log('Email Sent');
        inputEmail.style.border = '1px solid hsl(0, 80%, 86%)';
        inputEmail.style.backgroundImage = '';
        error.innerHTML = ``;


        
    }else {
        console.log('No email')
        inputEmail.style.border = '1px solid red';
        inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
    /* background-image: url('./images/icon-error.svg'); */

        error.innerHTML = `Please provide a valid email`;
    };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail(inputEmail.value);
    console.log('click');
})