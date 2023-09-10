
let a = prompt('Введите стоимость товара')
let b = prompt('Введите кол-во денег')

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