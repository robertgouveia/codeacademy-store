//this translates currency values
export function calculatePrice(price, currency){
    //we take a price and then translate it from USD to the specified currency
    switch (currency) {
        case 'EUR':{
            return price * 0.86;
        }
        case 'CAD':{
            return price * 1.33;
        }
        default:{
            return price;
        }
    }
}

//to calculate the total we take the cart and then the currency
export function calculateTotal(cart, currency){
    //amount in USD starts at 1
    let totalUSD = 0;
    //for each item in the chart get the price * the amount
    Object.keys(cart).forEach((itemName) => {
        totalUSD += cart[itemName].price * cart[itemName].quantity;
    })
    //return the price converted using the calculate price function
    return calculatePrice(totalUSD, currency).toFixed(2)
}

export function getCurrencySymbol(currencyFilter){
    //we accept the currency filter
    switch(currencyFilter){
        //if the currency filter is equal to a currency below we return a symbol
        case 'USD':{
            return '$';
        }
        case 'EUR':{
            return '€';
        }
        case 'CAD':{
            return '$';
        }
        default:{
            return ''
        }
    }
}