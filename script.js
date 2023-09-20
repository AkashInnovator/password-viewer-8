const inputField=document.querySelector('.input-field input');
const icon=document.querySelector('.input-field i');

icon.addEventListener('click',()=>{
    inputField.type=inputField.type==='password'?'text':'password';
    icon.className=`fa-solid fa-eye${inputField.type==='password'?'':'-slash'}`
})
console.log(inputField.type);