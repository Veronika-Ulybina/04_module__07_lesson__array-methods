'use strict';

{
	const getLeapYears = (n, m) => {
		const arr = [];

		const max = Math.max(n, m);
		const min = Math.min(n, m);
		
		for (let year = min; year <= max; year++) {
			if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
				arr.push(year);
			}
		}

		return arr;
	}

	const res = getLeapYears(1900, 2024);
	console.log(res);
}