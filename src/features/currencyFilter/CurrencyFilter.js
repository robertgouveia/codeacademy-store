import {currenciesData} from "../../data";
//possible currencies

//actions
import {setCurrency} from "../currencyFilter/currencyFilterSlice";

//we expect a state of the slice and the dispatch to call actions
export const CurrencyFilter = ({currencyFilter, dispatch}) => {
    //if the button is clicked then we must set the currency
    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency))
    };

    //return buttons based of currencies
    return (
        <div>
            <h3>Choose a currency</h3>
            {currenciesData.map(createCurrencyButton)}
        </div>
    )

    //button JSX containing the currency name and the on click
    function createCurrencyButton(currency){
        //this button has a selected class based on the currency filter
        //it also has an on click that performs the handler and passes the currency
        return(
            <button
                className={`currency-button ${currencyFilter === currency && 'selected'}`}
                onClick={() => {onClickHandler(currency)}}
            >{currency}</button>
        )
    }
}