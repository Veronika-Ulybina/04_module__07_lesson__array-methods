'use strict';

{
	const getRandomNumbers = count => {
		const arr = [];

		for (let i = 0; i < count; i++) {
			arr.push(Math.ceil(Math.random() * 100));
		}

		return arr;
	}

	const res = getRandomNumbers(7);
	console.log(res);
}