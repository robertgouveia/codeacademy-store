const initialCurrencyFilter = 'USD';
//currency default to USD

//actions
export const setCurrency = (currency) => {
    //we collect a currency and the return an action type and currency
    return {
        type: 'currencyFilter/setCurrency',
        payload: currency
    }
}

//reducer
export const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, action) => {
    switch(action.type){
        case 'currencyFilter/setCurrency':{
            //we return just the new currency
            return action.payload
        }
        default: {
            return currencyFilter
        }
    }
}