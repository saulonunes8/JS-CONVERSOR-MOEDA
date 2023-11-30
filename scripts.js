const convertButton = document.querySelector(".convert-button")



function convertValues() {
    const currencySelect = document.querySelector(".currency-select")
    const input = document.querySelector(".valor-digitado").value
    const currencyValueToConvert = document.querySelector(".currency-value-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    console.log(currencySelect.value)
    


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.6
    const realtoday = 1

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(input / libraToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input / realtoday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency", currency: "BRL"
    }).format(input)


}

function changeCurrency() {
    const currencySelect = document.querySelector(".currency-select")
    const currencyName = document.querySelector(".currency1")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }
    convertValues()

}


 
