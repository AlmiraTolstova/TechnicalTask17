// Задача 1. Создайте функцию, которая возвращает ваше имя. Имя вводится с input
// function getName()
// {
//     let my_input = document.getElementById('inputName');
//     return(my_input.value);
// }

let my_button = document.getElementById('button1');
let my_input = document.getElementById('inputName');

my_button.onclick = function()
{
    console.log(my_input.value);
}


//Задача  2. Создайте  функцию,  которая  принимает  2  числа  и  возвращает  большее 
// число из двух, либо любое из них если они равны.

function compare(a,b)
{
    if (a>b) {console.log (a);}
    else 
        if(a==b) {console.log (a);}
        else
            if (a<b) {console.log (b);} 
}

// Задача  3. Создайте  функцию,  которая  принимает  2  числа  и  возвращает  большее 
// число из двух, либо любое из них если они равны.
//            ^
//            |


// Задача  4. Создайте  функцию,  которая  возвращает  случайное  число  в  указанном 
// диапазоне. Диапазон  указывает  пользователь  с  помощью  двух  переменных,  которые 
// передаются функции в качестве параметров. 
function RandomNumber(min, max)
{
    console.log(Math.random()* (max - min) + min);
}

// С округлением числа
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }