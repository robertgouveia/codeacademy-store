import {createStore, combineReducers} from 'redux';

//reducers
import {cartReducer} from "../features/cart/cartSlice";
import {currencyFilterReducer} from "../features/currencyFilter/currencyFilterSlice";
import {inventoryReducer} from "../features/inventory/inventorySlice";

//store export
export const store = createStore(combineReducers({
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer
}))