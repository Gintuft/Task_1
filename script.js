//1) Прописать в коде две переменные с числами. Вывести в консоль бОльшее из них. Если они равны, то так и написать 'Значения равны между собой' 

firstVariable = 2
secondVariable = 3
if (firstVariable > secondVariable) {
    console.log(firstVariable)
}
else if (firstVariable < secondVariable) {
    console.log(secondVariable)

}
else {
    console.log("'Значения равны между собой'")
}


//1.1*) Устанавливать значения переменных не в коде, а при помощи функции prompt.


firstVariable = prompt('Введите первое число')
secondVariable = prompt('Введите второе число')
if (firstVariable > secondVariable) {
    console.log(firstVariable)
}
else if (firstVariable < secondVariable) {
    console.log(secondVariable)

}
else {
    console.log("'Значения равны между собой'")
}


// 2) Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...


i = 0;
while (i < 100) { 
    console.log(i ** 2);
  i++;
}


// 2.1*) Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

squareNumber = prompt('Введите число')
i=0
while (i < squareNumber) { 
    console.log(i ** 2);
    i++;
}


// 3 раза попросить пользователя ввести любое имя. Вывести в диалоговом окне (alert) склеенные имена через пробел (например, "Таня Витя Коля").

firstName = prompt("Введите первое имя")
secondName = prompt("Введите второе имя")
thirdName = prompt("Введите третье имя")
console.log(firstName + ' ' + secondName + ' ' + thirdName)



// 3.1**) 3 раза попросить пользователя ввести число. Вывести в диалоговом окне (alert) сумму введенных чисел.
firstNumber = prompt("Введите первое число")
secondNumber = prompt("Введите второе число")
thirdNumber = prompt("Введите третье число")
console.log(Number(firstNumber) + Number(secondNumber) + Number(thirdNumber))