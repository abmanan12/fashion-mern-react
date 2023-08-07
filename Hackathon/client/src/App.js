import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';

import Routes from './pages/Routes/Routes';
import store from './store/reduxStore';
import FilterContextProvider from './contexts/FilterContext';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <FilterContextProvider>
          <CartContextProvider>
            <Routes />
          </CartContextProvider>
        </FilterContextProvider>
      </Provider>

    </div>
  );
}

export default App;
