const calculateDaysUntilChristmas = () => {
	let todaysDate = new Date();
	let christmasDate = new Date("2024-12-25");

	let variable = Math.round(
		(christmasDate - todaysDate) / (1000 * 60 * 60 * 24)
	);

	let variable2 = document.getElementById("my-element");
	variable2.innerText = variable;
};

const calculateDaysUntilNewYear = () => {
	let todaysDate = new Date();
	let newYearsdate = new Date("2025-01-01");

	let variable = Math.round(
		(newYearsdate - todaysDate) / (1000 * 60 * 60 * 24)
	);

	let variable2 = document.getElementById("my-element2");
	variable2.innerText = variable;
};

calculateDaysUntilChristmas();
calculateDaysUntilNewYear();
