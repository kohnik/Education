let sum_arr = [];
let sum_onj = {};
let sum_num = 34543;
let sum_str = 'dfd';
let sum_bool = true;
const kek = 123;
console.log(kek)

// let container_byId = document.getElementById() // обращение по id
// let container_byClass = document.getElementsByClassName() // обращение по классу
let container_ByQuery = document.querySelector(".test") // обращение по классу, по id, напрямую по тегу (.class, #id. тег )
let container_ByQueryAll = document.querySelectorAll(".test") // обращение по классу, по id, напрямую по тегу (.class, #id. тег )
console.log(container_ByQueryAll)



//innerHTML, textContent

console.log(container_ByQuery.innerHTML) // Получаешь значение из тега
container_ByQuery.innerHTML = '<div>dfgdfg <span> SPAN HELLO</span> </div>'; //Присваеваешь тегу значени //текст и теги
container_ByQuery.textContent = '<div></div>textContent' // ТОЛЬКО ТЕКСТ

// container_ByQuery.addEventListener('click', clickDiv)
//String тип данных, number
// console.log(5+5,'СМОТРИ СЮДА')
console.log('5' + 5,'СМОТРИ СЮДА')
console.log('5' - 5,'СМОТРИ СЮДА')
console.log('5' * 5,'СМОТРИ СЮДА, произведение')
console.log('Hello ' + "Nikita")
function clickDiv() {
   let data =  localStorage.getItem('sdhfusd');
}

clickDiv();

//DOM что это?
//Приведение типов ( тема на собесе )
//Область видимости функции ( тема на собесе )
//В чем разниа между let и var