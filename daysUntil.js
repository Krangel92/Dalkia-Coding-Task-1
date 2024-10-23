const calculateDaysUntilChristmas = () => {
	let p = new Date();
	let q = new Date("2024-12-25");

	let variable = Math.round((q - p) / (1000 * 60 * 60 * 24));

	let variable2 = document.getElementById("my-element");
	variable2.innerText = variable;
};

const calculateDaysUntilNewYear = () => {
	let p = new Date();
	let q = new Date("2025-01-01");

	let variable = Math.round((q - p) / (1000 * 60 * 60 * 24));

	let variable2 = document.getElementById("my-element2");
	variable2.innerText = variable;
};

calculateDaysUntilChristmas();
calculateDaysUntilNewYear();
