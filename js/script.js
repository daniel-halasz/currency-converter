{
    const currencyExchange = (amountPLN, currency, currencyName) => {
        const exchangeEUR = 4.5481;
        const exchangeUSD = 3.7978;
        const exchangeCHF = 4.1279;
        const exchangeGBP = 5.2235;

        switch (currency) {
            case "EUR":
                return amountPLN / exchangeEUR;

            case "USD":
                return amountPLN / exchangeUSD;

            case "CHF":
                return amountPLN / exchangeCHF;
            case "GBP":
                return amountPLN / exchangeGBP;
        }
    };

    const formSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-currencyPLN");
        const chooseCurrency = document.querySelector(".js-selectCurrency");
        const getResult = document.querySelector(".js-result");

        const amountPLN = +inputElement.value;
        const currency = chooseCurrency.value;

        const result = currencyExchange(amountPLN, currency);

        getResult.innerText = `${result.toFixed(2)} ${currency}.`;
    };

    const init = () => {

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", formSubmit)
    };

    init();
}