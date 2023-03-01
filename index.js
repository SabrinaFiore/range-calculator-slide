function calculateDiscount() {

	let planAmount = 39
	let planValue = document.getElementById("planValue").value;
	document.getElementById("selectPlanHtml").innerHTML = planValue;
	planAmount = planValue

	let numberOfMonth = 1
	let numberOfMonthValue = document.getElementById("numberOfMonthValue").value;
	document.getElementById("numberOfMonthHtml").innerHTML = numberOfMonthValue;
	numberOfMonth = numberOfMonthValue

	calculationPlanForMonth = planAmount * numberOfMonth
	// document.getElementById("calculationPlanForMonth").innerHTML = calculationPlanForMonth;
	// console.log("calculationPlanForMonth", calculationPlanForMonth)

	let priceAmount = 1
	let priceAmountValue = document.getElementById("priceAmountValue").value;
	document.getElementById("priceAmountHtml").innerHTML = priceAmountValue;
	priceAmount = priceAmountValue;

	let percentageFee = 0
	let percentageFeeValue = document.getElementById("percentageFeeValue").value;
	// document.getElementById("percentageFeeHtml").innerHTML = percentageFeeValue;
	percentageFee = percentageFeeValue;

	// console.log("priceAmount", priceAmount)
	// console.log("percentageFeeValue", percentageFeeValue)

	percentageCalculator = ((priceAmount * percentageFeeValue) / 100)

	if (percentageCalculator > calculationPlanForMonth) {
		var percentagePositiveVal = percentageCalculator
	}

	// document.getElementById("percentageCalculator").innerHTML = percentageCalculator;
	// console.log("percentageCalculator", percentageCalculator)

	let discount = percentagePositiveVal - calculationPlanForMonth;
	// console.log("finalDiscount", finalDiscount)

	if (isNaN(discount) || discount === undefined) {
		console.log("isNaN(discount)", isNaN(discount))
		console.log("discount === undefined", discount === undefined)
		document.getElementById("finalDiscount").style.display = "none";
	} else {
		document.getElementById("finalDiscount").style.display = "block";
		document.getElementById("finalDiscount").innerHTML = discount;
	}

}