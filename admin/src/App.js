import './app.scss';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/new-user/NewUser';

import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/new-product/NewProduct';
import Login from './pages/login/Login';

import { useSelector } from 'react-redux';

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <BrowserRouter>
      <Topbar />
      {admin && (
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:prodId' element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
