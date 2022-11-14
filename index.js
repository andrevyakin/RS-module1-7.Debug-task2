const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

//if (temperatureInCelsius === 0) {
//Ошибка 1.
// Не выполнено приведение тика переменной temperatureInCelsius к Number
// prompt вовращает string, поэтому выражение всегда будет ложным
//Правильно
if (Number(temperatureInCelsius) === 0) {
    console.log("Зашли в if");
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

//const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
//Ошибка 2.
//Неправильно написана переменная temperatureInCelsius и скобки не нужны
//Правильно
const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;

//alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.`);
//Ошибка 3
//В конструкции интерполяции допущена ошибка (процент вместо доллара)
//Правильно
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);