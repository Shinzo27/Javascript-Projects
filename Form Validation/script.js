const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');
const form = document.querySelector('form');


const clearForm = () => {
    document.querySelectorAll('.form-input-wrapper').forEach((item) => {
        item.className = 'form-input-wrapper';
    })
    form.reset();
}

document.querySelector('.signup-btn').addEventListener('click', ()=>{
    container.classList.add('change')
    setTimeout(() => {
        headingSpan2.textContent = "Up"    
    }, 200);
    form.className = 'form sign-up';
    clearForm();
});

document.querySelector('.signin-btn').addEventListener('click', ()=> {
    container.classList.remove('change')
    setTimeout(() => {
        headingSpan2.textContent = "In"    
    }, 200);
    form.className = 'form sign-in';
    clearForm();
});

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

const error = (input, message) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = " form-input-wrapper error";
    inputWrapper.querySelector('.message').textContent = message;
}

const success = (input) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = 'form-input-wrapper success';
}

const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
        if(input.value.trim() === "") {
            error(input,`${input.id} is required`);
        } else {
            success(input);
        }
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(form.classList[1] === 'sign-up'){
        checkRequiredFields([username,email,password,confirm]);
    }
    else {
        checkRequiredFields([email,password]);
    }
    
})
