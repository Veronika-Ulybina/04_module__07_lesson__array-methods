'use strict';

{
	const getRandomNumbers = (count, n, m, str) => {
		const arr = [];
		
		const max = Math.floor(Math.max(n, m));
		const min = Math.ceil(Math.min(n, m));
	
		while (arr.length < count) {
			const random = Math.floor(Math.random() * (max - min + 1) + min);

			if ((str === 'even' && random % 2 === 0) || (str === 'odd' && random % 2 !== 0)) {
				arr.push(random);
			}
		}

		return arr;
	}
	
	console.log(getRandomNumbers(7, 5, 2, 'even'));
	console.log(getRandomNumbers(5, 5, 2, 'odd'));
}