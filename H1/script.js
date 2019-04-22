

let money = prompt("Введите Ваш бюджет на месяц:", "");
let time = prompt("Введите дату в формате YYYY-MM-DD:", "");
let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (i = 0; i < 2; i++){
	var a = prompt("Статья расходов", "");
	var b = prompt("Во сколько обойдется?", "");
	appData.expenses[a] = b;
};

alert("Бюджет на один день составляет: " + (appData.budget / 30));

/*Ответы на вопросы к заданию:
	1)Исходя из Вашей лекции, в JS существует 7 типов данных:
number, string, boolean, null, undefined, symbol, object.
	2)Информация в консоль выводится через console.log("здесь 
информация для вывода в консоль");
	3)|| - логическое ИЛИ, && - логическое И.*/