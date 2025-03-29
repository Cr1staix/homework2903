//Задание 1
let requestDigit = prompt("Введите число");
let digit = Number(requestDigit);

if (typeof digit !== 'number' || isNaN(digit)) {
    alert(`"${requestDigit}" не число`);
} else if (digit % 2 === 0) {
    alert(`"${digit}" Чётное число`);
} else {
    alert(`"${digit}" Нечётное число`);
}

//Задание 2

const dollarToRoubleRate = 84.95;
let dollarAmount = prompt("Введите сумму в долларах");
alert(`Вы указали сумму "${dollarAmount}" долларов. В рублях это - "${dollarAmount * dollarToRoubleRate}"`);

//Задание 3

let d1 = Number(prompt("Введите первое число"));
let d2 = Number(prompt("Введите второе число"));
let action = prompt("Выберете действие (+, -, *, /)");
let result;

if (isNaN(d1) || isNaN(d2)) {
    alert(`Неверный формат ввода, убедитесь что "${d1}" и "${d2}" являются числами`);
} else {
    switch (action) {
        case '+':
            result = d1 + d2;
            break;
        case '-':
            result = d1 - d2;
            break;
        case '*':
            result = d1 * d2;
            break;
        case '/':
            if (d2 === 0) {
                alert("На ноль делить нельзя");
            } else {
                result = d1 / d2;
            }
            break;
        default:
            alert("Выбрано неизвестное действие");
    }
    alert(`${d1} ${action} ${d2} = ${result}`);
}