//cheack login
const testlogin = (localStorage.getItem ("logit")) ? true : false
if(testlogin != false){
    location.href ='/board.html';
}
//restore data inputs
document.getElementById('email').value = localStorage.getItem('email');
document.getElementById('password').value = localStorage.getItem('password');
document.getElementById('save').checked = ((localStorage.getItem ("checked")) ? true : false);
//flag inputs
const flagInputs ={
    email: false,
    password: false
}
//restore data flag
if (document.getElementById('email').value != ''){
    flagInputs.email = ((localStorage.getItem ("flagInputsEmail")) ? true : false);
}
if (document.getElementById('password').value != ''){
    flagInputs.password = ((localStorage.getItem ("flagInputsPass")) ? true : false);
}
//validation data inputs
const errorMessage = ((error, nameInput)=>{
    if (error == false){
        document.getElementById(`${nameInput}`).classList.add('form__paragrapth--show');
    }else{
        document.getElementById(`${nameInput}`).classList.remove('form__paragrapth--show');
    }
});
const validation = ((e) =>{
    let error =false;
    switch(e.target.name){
        case 'email':
            const emailValidation =  /[a-z0-9._-]+@[a-z]+\.[a-z]{2,3}/
            if (emailValidation.test(e.target.value)){
                flagInputs.email = true;
                error = true;
                errorMessage(error,'errorEmail');
            }else{
                flagInputs.email = false;
                errorMessage(error,'errorEmail');
            }
        break;
        case 'password':
            if (e.target.value.length == 8){
                flagInputs.password = true;
                error = true;
                errorMessage(error,'errorPassword');
            }else{
                flagInputs.password = false;
                errorMessage(error,'errorPassword');
            }
        break;
    }
});
//input event
const inputs = document.querySelectorAll('#fielsetInputs .formlogin__input');
inputs.forEach((input)=>{
    input.addEventListener('keyup', validation);
    input.addEventListener('blur', validation);
});
//intro
const form = document.getElementById('form');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let error = false;
    if(flagInputs.email != false && flagInputs.password != false){
        fetch('https://basic-server-one.vercel.app/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            })
        })
        .then((resolve) =>{
            location.href ='/board.html';
            localStorage.setItem('logit', true);
        })
        .catch(() =>{
            setTimeout(()=>{
                document.getElementById('errorLogin').classList.add('form__paragrapth--show');
            },2000);
        })
        flagInputs.email= false;
        flagInputs.password= false;
    }else{
        if(flagInputs.email != true){
            errorMessage(error,'errorEmail');
        }
        if(flagInputs.password != true){
            errorMessage(error,'errorPassword');
        }
    }
});
//checked
const saveData = document.getElementById('save');
saveData.addEventListener('click',(e)=>{
    if(e.target.checked != false && (document.getElementById('email').value != '' || document.getElementById('password').value != '')){
        if(document.getElementById('email').value != ''){
            localStorage.setItem('email', document.getElementById('email').value);
        }
        if(document.getElementById('password').value !=''){
            localStorage.setItem('password', document.getElementById('password').value);
        }
        localStorage.setItem('flagInputsEmail', flagInputs.email);
        localStorage.setItem('flagInputsPass', flagInputs.password);
        localStorage.setItem('checked', e.target.checked);
    }else{
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('flagInputsEmail');
        localStorage.removeItem('flagInputsPass');
        localStorage.removeItem('checked');
    }
});






