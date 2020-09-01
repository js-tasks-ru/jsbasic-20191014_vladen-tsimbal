/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
	let number = 0;

	for(let key in salaries) {
		typeof salaries[key];

		if (typeof salaries[key] === 'number') {
			number += salaries[key];
		}
	}

	return number;
}
