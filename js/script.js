let form = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-currencyPLN");
let chooseCurrency = document.querySelector(".js-selectCurrency");
let buttonConverter = document.querySelector(".js-buttonSubmit");
let getResult = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let exchangeEUR = 4.5481;
    let exchangeUSD = 3.7978;
    let exchangeCHF = 4.1279;
    let exchangeGBP = 5.2235;

    let currency = chooseCurrency.value;
    let amountPLN = inputElement.value;
    let result;
    let currencyName;

    switch (currency) {
        case "eur":
            result = (amountPLN / exchangeEUR);
            currencyName = "EUR";
            break;
        case "usd":
            result = (amountPLN / exchangeUSD);
            currencyName = "USD";
            break;
        case "chf":
            result = (amountPLN / exchangeCHF);
            currencyName = "CHF";
            break;
        case "gbp":
            result = (amountPLN / exchangeGBP);
            currencyName = "GBP";
            break;
    }

    getResult.innerText = `${result.toFixed(2)} ${currencyName}.`;
})