import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './page/Landing';
import SignUp from '../src/page/Registration';
import Login from '../src/page/Login';
import Dashboard from './page/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContextProvider } from './Context/shop-context';
import Cart from './page/Cart';
import Checkout from './page/Checkout';
import CartOrder from './page/Order';

function App() {
  return (
    <div>
      <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Registration' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />}  />
          <Route path='/CartOrder' element={<CartOrder />} />
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
