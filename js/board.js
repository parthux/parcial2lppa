//cheack login
const testlogin = JSON.parse(localStorage.getItem('logit'));
if(testlogin == false){
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
const tabla = ((resultJson)=>{
    const contTable = document.getElementById('contTable');
    for(let i of resultJson['data']){
        contTable.innerHTML +=`
        <tr class='table__tr'>
            <td class='table__td'>${i.id}</td>
            <td class='table__td'>${i.name}</td>
            <td class='table__td'>${i.username}</td>
            <td class='table__td'>${i.email}</td>
            <td class='table__td'>${i.address.street}</td>
            <td class='table__td'>${i.address.suite}</td>
            <td class='table__td'>${i.address.city}</td>
            <td class='table__td'>${i.phone}</td>
            <td class='table__td'>${i.company.name}</td>
        </tr>`
    }
});
fetch('https://basic-server-one.vercel.app/users')
.then((result)=>{
    return result.json();
})
.then((resultJson)=>{
    tabla(resultJson);;
});

