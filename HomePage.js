const loginbox = document.querySelector('.login-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const repasswordlink = document.querySelector('.re-password');
const rememberpasslink = document.querySelector('.rememberpass-link');
const navbutton = document.querySelector('.nav-button');
const iconClose = document.querySelector('.close-icon');

navbutton.addEventListener('click', ()=>{

    loginbox.classList.add('active-popup');

});

repasswordlink.addEventListener('click', ()=>{

    loginbox.classList.add('repassword-active');

});

registerlink.addEventListener('click', ()=> {

    loginbox.classList.add('register-active');

});

loginlink.addEventListener('click', ()=> {

    loginbox.classList.remove('register-active');

});

rememberpasslink.addEventListener('click', ()=> {

    loginbox.classList.remove('repassword-active');

});


iconClose.addEventListener('click', ()=>{

    loginbox.classList.remove('active-popup');

});