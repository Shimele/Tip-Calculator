const range = document.querySelector("#tipRange");
const percentageOut = document.querySelector("#percentOut");
const billAmount = document.querySelector("#billAmount");
const rating = document.querySelector("option")
const btnCalculate = document.querySelector("#calculate");
const resultDisplay = document.querySelector("#result");


btnCalculate.onclick = function(){
    if(rating.value == "4"){
        percentageOut.innerHTML = 50  + "%";
        range.value = "50"
    }else if(rating.value == "3"){
        percentageOut.innerHTML = 30 + "%";
        range.value = "30"
    }else if(rating.value == "2"){
        percentageOut.innerHTML = 10 + "%";
        range.value = "10"
    }else if(rating.value == "1"){
        percentageOut.innerHTML = 0 + "%";
        range.value = "0"
    }
    let bill = parseFloat(billAmount.value);
    let tip = (bill * (range.value/100)).toFixed(2);
    let total = (bill + parseFloat(tip)).toFixed(2);
    let output = `<strong>Tip Amount:</strong> $${tip}<br><strong>Total Bill:</strong> $${total}`
    resultDisplay.innerHTML = output;
}