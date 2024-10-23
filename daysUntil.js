const calculateDaysUntilChristmas = () => {
	var p = new Date();
	var q = new Date("2024-12-25");

	var variable = Math.round((q - p) / (1000 * 60 * 60 * 24));

	var variable2 = document.getElementById("my-element");
	variable2.innerText = variable;
};

const calculateDaysUntilNewYear = () => {
	var p = new Date();
	var q = new Date("2025-01-01");

	var variable = Math.round((q - p) / (1000 * 60 * 60 * 24));

	var variable2 = document.getElementById("my-element2");
	variable2.innerText = variable;
};

calculateDaysUntilChristmas();
calculateDaysUntilNewYear();
