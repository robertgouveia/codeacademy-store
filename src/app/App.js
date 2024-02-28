import '../index.css';
import {CurrencyFilter} from "../features/currencyFilter/CurrencyFilter";

function App({state, dispatch}) {
  return (
      <CurrencyFilter currencyFilter={state.currencyFilter} dispatch={dispatch}/>
  )
}

export default App;
