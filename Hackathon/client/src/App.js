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

      {/* <div className='blur' style={{ top: '-18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div> */}

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
