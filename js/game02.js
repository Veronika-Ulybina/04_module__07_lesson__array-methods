'use strict';

{
	const guessNumber = () => {
		const firstNum = prompt('Введите первое число?');
		
		if (Number.isNaN(+firstNum)) {
			alert('Вы ввели не число');
			return;
		}

		if (firstNum === null || firstNum === '') {
			return;
		}
		
		const secondNum = prompt('Введите второе число?');

		if (Number.isNaN(+secondNum)) {
			alert('Вы ввели не число');
			return;
		}

		if (secondNum === null || secondNum === '') {
			return;
		}

		const max = Math.floor(Math.max(firstNum, secondNum));
		const min = Math.ceil(Math.min(firstNum, secondNum));

		const random = Math.floor(Math.random() * (max - min + 1) + min);
		const numberOfAttempts = Math.ceil((max - min) * 0.3);

		const arr = [];
		let count = 0;

		while (count < numberOfAttempts) {
			const declination = declOfNum(numberOfAttempts - count, ['попытка', 'попытки', 'попыток']);

			const userNum = prompt(`Отгадайте число от 1 до 100? (у вас ${numberOfAttempts - count} ${declination})`);
			
			if (userNum === null || userNum === '') {
				break;
			}
			
			if (userNum > random) {
				alert('Меньше!');
			} else if (userNum < random) {
				alert('Больше!');
			} else if (userNum == random) {
				alert('Правильно!');
				break;
			} else if (Number.isNaN(+userNum)) {
				alert('Введите число!') 
				continue;
			}
			
			if (arr.find(item => item === userNum)) {
				alert('Это число вы уже вводили');
				continue;
			} else {
				arr.push(userNum);
			}

			count++;
			if (count === numberOfAttempts) {
				alert('У вас не осталось попыток:( Попробуйте еще раз!');
			}
		}
	}

	guessNumber();


	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
	}
}