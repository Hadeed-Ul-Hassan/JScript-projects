'use strict'
const empty = "";
const ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lcase = 'abcdefghijklmnopqrstuvwxyz';
const number = '123456789';
const symbol = '!@#$%^&*-_';


const Plength = document.getElementById('p-length');
const uppercase = document.getElementById('p-uppercase');
const lowercase = document.getElementById('p-lowercase');
const PNumber = document.getElementById('p-numbers');
const PSymbol = document.getElementById('p-symbols');
const submit = document.getElementById('submit');
const password = document.getElementById('password');


submit.addEventListener('click', () =>{
let initialPassword = empty;
(uppercase.checked) ? initialPassword += ucase : "";
(lowercase.checked) ? initialPassword += lcase : "";
(PNumber.checked) ? initialPassword += number : "";
(PSymbol.checked) ? initialPassword += symbol : "";
password.value = generatePassword(Plength.value, initialPassword)
});

function generatePassword(l,initialPassword){
let pass = "";
for(let i=0; i<l; i++){
pass += initialPassword. charAt(Math.floor(Math.random() * initialPassword.length));


}
return pass;


};

// COPY COMMAND //

const Copy = document.getElementById('copy');

Copy.addEventListener('click', ()=>{
if(password.value == ""){
    alert('Please generate a password');
}
else{
    password.select();
    document.execCommand('Copy');
    alert('The password has been copied to clipboard')
}
});










