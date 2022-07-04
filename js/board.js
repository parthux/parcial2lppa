//cheack login
const testlogin = JSON.parse(localStorage.getItem('logit'));
if(testlogin == false){
    if (location.origin == 'https://parthux.github.io'){
        window.location.assign(`/parcial2lppa/index.html`);
    }else{
        window.location.assign(`/index.html`);
    }
}
//button logout
document.querySelector('#containerButtonLogout .header__button').disabled = true;//disable button opacity 0
const logoutUser = document.getElementById('iconLogout');
logoutUser.addEventListener('click', ()=>{
    document.getElementById('containerButtonLogout').classList.toggle('header__button-container--show');
    document.querySelector('#containerButtonLogout .header__button').disabled = false;//active button opacity 1
});
const ButtonLogout = document.querySelector('#containerButtonLogout .header__button');
ButtonLogout.addEventListener('click', ()=>{
    localStorage.setItem('logit','false');
    if (location.origin == 'https://parthux.github.io'){
        window.location.assign(`/parcial2lppa/index.html`);
    }else{
        window.location.assign(`/index.html`);
    }
});
const tabla = ((resultJson)=>{
    const contTable = document.getElementById('contTable');
    for(let i of resultJson['data']){
        contTable.innerHTML +=`
        <tr class='table__tr'>
            <td class='table__td'>${i.id}</td>
            <td class='table__td'>${i.name}</td>
            <td class='table__td'>${i.email}</td>
            <td class='table__td'>${i.address.street}</td>
            <td class='table__td'>${i.address.suite}</td>
            <td class='table__td'>${i.address.city}</td>
            <td class='table__td'>${i.phone}</td>
        </tr>`
    }
});
fetch('https://basic-server-one.vercel.app/users')
.then((result)=>{
    return result.json();
})
.then((resultJson)=>{
    tabla(resultJson);
});
