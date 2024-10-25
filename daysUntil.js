const calculateDaysUntilChristmas = () => {
	let todaysDate = new Date();
	let christmasDate = new Date("2024-12-25");

	let calculationResult = Math.round(
		(christmasDate - todaysDate) / (1000 * 60 * 60 * 24)
	);

	let daysLeftDisplay = document.getElementById("my-element");
	daysLeftDisplay.innerText = calculationResult;
};

const calculateDaysUntilNewYear = () => {
	let todaysDate = new Date();
	let newYearsdate = new Date("2025-01-01");

	let calculationResult = Math.round(
		(newYearsdate - todaysDate) / (1000 * 60 * 60 * 24)
	);

	let daysLeftDisplay = document.getElementById("my-element2");
	daysLeftDisplay.innerText = calculationResult;
};

const calculateDaysUntilValentines = () => {
	let todaysDate = new Date();
	let currentYear = todaysDate.getFullYear();

	let valentinesDate = new Date(currentYear, 1, 14);

	if (todaysDate > valentinesDate) {
		valentinesDate = new Date(currentYear + 1, 1, 14);
	}

	let calculationResult = Math.round(
		(valentinesDate - todaysDate) / (1000 * 60 * 60 * 24)
	);

	let daysLeftDisplay = document.getElementById("my-element3");
	daysLeftDisplay.innerText = calculationResult;
};

calculateDaysUntilChristmas();
calculateDaysUntilNewYear();
calculateDaysUntilValentines();
