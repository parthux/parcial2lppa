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