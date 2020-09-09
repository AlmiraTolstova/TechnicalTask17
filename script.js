// Задача 1. Создайте функцию, которая возвращает ваше имя. Имя вводится с input


let my_button = document.getElementById('button1');
let my_input = document.getElementById('inputName');

my_button.onclick = function()
{
    console.log(my_input.value);
}

//Задача 1 второе решение
function my_submit()
{
    let my_input = document.getElementById('inputName');
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

compare(2,4);
compare(99999999,999999999);

// Задача  3. Создайте  функцию,  которая  принимает  2  числа  и  возвращает  большее 
// число из двух, либо любое из них если они равны.
//            ^
//            |


// Задача  4. Создайте  функцию,  которая  возвращает  случайное  число  в  указанном 
// диапазоне. Диапазон  указывает  пользователь  с  помощью  двух  переменных,  которые 
// передаются функции в качестве параметров. 
function randomNumber(min, max)
{
    console.log(Math.random()* (max - min) + min);
}



// С округлением числа
function getRandomNumber(min, max)
{
    let min1 = Math.ceil(min);
    let max1 = Math.floor(max);
    return Math.floor(Math.random() * (max1 - min1 + 1)) + min1; //Максимум и минимум включаются
}

for(let i=0; i<5;i++)
{
    for(let j=10; j<50;j=j+10)
    {
        console.log(getRandomNumber(i,j));
    }
}