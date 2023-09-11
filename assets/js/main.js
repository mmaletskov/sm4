
let a = prompt('Введите стоимость товара')
let b = prompt('Введите кол-во денег')

var a = Number(a1);
var b = Number(b1);


if(a>b){
    let x = a-b;
    document.getElementById('text').innerHTML = 'Вам не хватает: '+ x + 'р.';
}
else if(a<b){
    let x = b-a;
    document.getElementById('text').innerHTML = 'Покупка совершена. Ваша сдача: '+ x + 'р.';
}
else{
    document.getElementById('text').innerHTML = 'Покупка совершена.'
}



// стилизация
let title = document.getElementById("title")
title.style.fontFamily = "Montserrat"



// вставка html
let add =  '<p class="add">Вставка HTML-кода из JS</p>';
let for__add = document.querySelector('.for__add');
for__add.innerHTML = add;


let link = '<a href="https://github.com/mmaletskov/sm4" class="">ссылка на гит</a>';
let link__git = document.querySelector('.link__git');
link__git.innerHTML = link; 
