'use strict';

{
	const getRandomNumbers = (count, n, m, str) => {
		const arr = [];
		
		const max = Math.floor(Math.max(n, m));
		const min = Math.ceil(Math.min(n, m));
	
		for (let i = 0; i < count; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1) + min));
		}

		if (str === 'even') {
			return arr.filter(item => !(item % 2));
		} else if (str === 'odd') {
			return arr.filter(item => item % 2);
		}
	}
	
	console.log(getRandomNumbers(7, 5, 2, 'even'));
}