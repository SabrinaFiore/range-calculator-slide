console.log("You are in output function")

function valuePlanOnInput() {
	var sliderPlanValue = ''
	let sliderPlan = document.getElementById("sliderPlan").value;
	// let selector = document.getElementById("selector").value;
	document.getElementById("selectPlan").innerHTML = sliderPlan;

	// Put value in a variable
	sliderPlanValue = sliderPlan
	console.log("sliderPlanValue", sliderPlanValue)
}

function valueMonthOnInput() {
	var sliderMonthValue = ''
	let sliderMonth = document.getElementById("sliderMonth").value;
	document.getElementById("selectMonth").innerHTML = sliderMonth;

	// Put value in a variable
	sliderMonthValue = sliderMonth
	console.log("sliderMonthValue", sliderMonthValue)
}

function valuePriceOnInput() {
	var sliderPriceValue = ''
	let sliderPrice = document.getElementById("sliderPrice").value;
	document.getElementById("selectPrice").innerHTML = sliderPrice;

	// Put value in a variable
	sliderPriceValue = sliderPrice;
	console.log("sliderPriceValue", sliderPriceValue)
}

function valueFeesOnInput() {
	var sliderFeeValue = ''
	let sliderFee = document.getElementById("sliderFee").value;
	document.getElementById("selectFee").innerHTML = sliderFee;

	sliderFeeValue = sliderFee;
	console.log("sliderFeeValue", sliderFeeValue)
}