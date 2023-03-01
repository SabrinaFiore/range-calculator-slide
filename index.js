function calculateDiscount() {
	let planAmount = ''
	let planValue = document.getElementById("planValue").value;
	document.getElementById("selectPlanHtml").innerHTML = planValue;
	planAmount = planValue

	let numberOfMonth = ''
	let numberOfMonthValue = document.getElementById("numberOfMonthValue").value;
	document.getElementById("numberOfMonthHtml").innerHTML = numberOfMonthValue;
	numberOfMonth = numberOfMonthValue

	calculationPlanForMonth = planAmount * numberOfMonth
	console.log("calculationPlanForMonth", calculationPlanForMonth)

	let priceAmount = ''
	let priceAmountValue = document.getElementById("priceAmountValue").value;
	document.getElementById("priceAmountHtml").innerHTML = priceAmountValue;
	priceAmount = priceAmountValue;

	let percentageFee = ''
	let percentageFeeValue = document.getElementById("percentageFeeValue").value;
	document.getElementById("percentageFeeHtml").innerHTML = percentageFeeValue;
	percentageFee = percentageFeeValue;

	percentageCalculator = ((priceAmount * percentageFeeValue) / 100).toFixed()
	// console.log("percentageCalculator", percentageCalculator)

	let finalDiscount = percentageCalculator - calculationPlanForMonth;
	console.log("finalDiscount", finalDiscount)

	document.getElementById("finalDiscount").innerHTML = finalDiscount;
}