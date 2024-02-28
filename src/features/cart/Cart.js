//utilities
import {calculateTotal, getCurrencySymbol} from "../../utilities/utilities";

//actions
import {changeItemQuantity} from "./cartSlice";

export const Cart = ({cart, dispatch, currencyFilter}) => {

    //for each item in the cart send its name to the create function
    const cartElements = Object.keys(cart).map(createCartItem);
    //the total is the carts total with its multiplier
    const total = calculateTotal(cart, currencyFilter)

    const onInputChangeHandler = (name, input) => {
        if(input === ''){
            return;
        }

        const newQuantity = Number(input);

        dispatch(changeItemQuantity(name, newQuantity))
    }

    return (
        //render a container holding items and the display a total
        <div id='cart-container'>
            <ul id='cart-items'>
                {cartElements}
            </ul>
            <h3 className='total'>
                Total{'  '}
                <span className='total-value'>
                    {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
                </span>
            </h3>
        </div>
    )

    function createCartItem(name){
        const item = cart[name];

        console.log(item.quantity)

        if(item.quantity === 0){
            return;
        }

        return(
            <li key={name}>
                <p>{name}</p>
                <select
                    className='item-quantity'
                    onChange={(e) => {
                        onInputChangeHandler(name, e.target.value)
                    }}
                    value={item.quantity}
                >
                    {[...Array(100).keys()].map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                        ))}
                </select>
            </li>
        )
    }
}