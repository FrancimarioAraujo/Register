var nome = document.getElementById('name');
var email = document.getElementById('email');
var btnRegister = document.getElementById('btnRegister');


var count = 0;

if(!localStorage.getItem('count')){
    localStorage.setItem('count',1);
}

count = localStorage.getItem('count');
count = Number.parseInt(count);

btnRegister.onclick = function(){
    if(nome.value !== '' && email.value !== ''  && email.value.indexOf('@gmail.com') !== -1){

        localStorage.setItem(count,[nome.value,email.value]);
        count+=1;
        localStorage.setItem('count',count);
        alert('Cadastrado com sucesso!');
    }
    else{
        alert('Alguns campos não foram preenchidos de forma correta!');
    }
  
}

