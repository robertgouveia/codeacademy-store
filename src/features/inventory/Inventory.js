//utils
import {calculatePrice, getCurrencySymbol} from "../../utilities/utilities";

//actions
import {addItem} from "../cart/cartSlice";
import {loadData} from "./inventorySlice";
import {useEffect} from "react";

//the inventory requires the inventory slice, currency filter selected and the dispatch for actions
export const Inventory = ({inventory, currencyFilter, dispatch}) => {

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem))
    }

    const onMount = () => {
        dispatch(loadData());
    }
    useEffect(onMount, [dispatch]);

    return (
        <ul id='inventory-container'>
            {inventory.map(createInventoryItem)}
        </ul>
    )

    function createInventoryItem(inventoryItem){
        const {price, name, img} = inventoryItem
        const displayPrice = calculatePrice(price, currencyFilter)
        return (
            <li key={name} className='item'>
                <img src={img} alt={''}/>
                <h3>{name}</h3>
                <h3 className='price'>
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button
                    onClick={() => {onClickHandler(inventoryItem)}}
                    className='add-to-cart-button'
                >
                    Add to Cart
                </button>
            </li>
        )
    }
}