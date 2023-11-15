'use strict';

{
	const getRandomNumbers = (count, n, m) => {
		const arr = [];

		const max = Math.floor(Math.max(n, m));
		const min = Math.ceil(Math.min(n, m));

		for (let i = 0; i < count; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1) + min));
		}

		return arr;
	}

	const res = getRandomNumbers(7, -1, 5);
	console.log(res);
}