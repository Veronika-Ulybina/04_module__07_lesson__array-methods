'use strict';

{
	const guessNumber = () => {
		const random = Math.ceil(Math.random() * 100);
	
		while (random) {
			const userNum = prompt('Отгадайте число от 1 до 100?');
			
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
				alert('Введите число!');
			}
		}
	}

	guessNumber();
}