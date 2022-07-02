//cheack login
const testlogin = (localStorage.getItem ("logit")) ? true : false
if(testlogin != true){
    location.href='/login.html';
}
//button logout
const logoutUser = document.getElementById('iconLogout');
logoutUser.addEventListener('click', ()=>{
    document.getElementById('containerButtonLogout').classList.toggle('header__button-container--show');
});
const ButtonLogout = document.querySelector('#containerButtonLogout .header__button');
ButtonLogout.addEventListener('click', ()=>{
    localStorage.removeItem('logit');
    location.href='/login.html';
});
