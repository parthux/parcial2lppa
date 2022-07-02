//cheack login
const testlogin = JSON.parse(localStorage.getItem('logit'));
if(testlogin != true){
    window.location.assign(`${window.location.origin}/login.html`);
}
//button logout
const logoutUser = document.getElementById('iconLogout');
logoutUser.addEventListener('click', ()=>{
    document.getElementById('containerButtonLogout').classList.toggle('header__button-container--show');
});
const ButtonLogout = document.querySelector('#containerButtonLogout .header__button');
ButtonLogout.addEventListener('click', ()=>{
    localStorage.setItem('logit','false');
    location.href='/login.html';
});
