//validation data inputs
const flagInputs ={
    email: false,
    password: false
}
const errorMessage = (error, nameInput)=>{
    if (error == false){
        document.getElementById(`${nameInput}`).classList.add('form__paragrapth--show');
    }else{
        document.getElementById(`${nameInput}`).classList.remove('form__paragrapth--show');
    }
}
const validation = (e) =>{
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
            const passwordValidation =  /[a-zA-z0-9]{8}/
            if (passwordValidation.test(e.target.value)){
                flagInputs.password = true;
                error = true;
                errorMessage(error,'errorPassword');
            }else{
                flagInputs.password = false;
                errorMessage(error,'errorPassword');
            }
        break;
    }
}
const inputs = document.getElementById('fielsetInputs');
inputs.addEventListener('keyup', validation);
inputs.addEventListener('blur', validation);
//intro
const form = document.getElementById('form');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let error = false;
    if(flagInputs.email != false && flagInputs.password != false){
        fetch('https://basic-server-one.vercel.app/login', {
            method: "POST",
            body: JSON.stringify({
                email: 'principematias23@gmail.com',
                password: '1245370891'
            })
        })
        .then((resolve) =>{
            resolve.json();
        })
        .then((respuesta)=>{
            console.log(respuesta);
        })
        .catch((error) =>{
            alert('no se encuentra el servidor');
        })
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
    if(e.target.checked == true && (document.getElementById('email').value != '' || document.getElementById('password').value !='')){
        if(document.getElementById('email').value != ''){
            localStorage.setItem('email', document.getElementById('email').value);
        }
        if(document.getElementById('password').value !=''){
            localStorage.setItem('password', document.getElementById('password').value);
        }
        localStorage.setItem('checked', e.target.checked);
    }else{
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('checked');
    }
});
//restore data inputs
document.getElementById('email').value = localStorage.getItem('email');
document.getElementById('password').value = localStorage.getItem('password');
document.getElementById('save').checked = localStorage.getItem('checked');