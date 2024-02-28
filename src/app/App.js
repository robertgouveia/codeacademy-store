import '../index.css';
import {CurrencyFilter} from "../features/currencyFilter/CurrencyFilter";
import {Inventory} from "../features/inventory/Inventory";
import {Cart} from "../features/cart/Cart";

function App({state, dispatch}) {
  return (
      <div id='app'>
        <CurrencyFilter currencyFilter={state.currencyFilter} dispatch={dispatch}/>
        <Inventory currencyFilter={state.currencyFilter} inventory={state.inventory} dispatch={dispatch}/>
        <Cart cart={state.cart} dispatch={dispatch} currencyFilter={state.currencyFilter}/>
      </div>
  )
}

export default App;
