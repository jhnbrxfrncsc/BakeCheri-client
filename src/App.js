import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions/products';

// React-Router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NewProduct from './pages/Admin/NewProduct/NewProduct';
import AdminUsers from './pages/Admin/AdminUsers/AdminUsers';
import AdminOrders from './pages/Admin/AdminOrders/AdminOrders';
import AdminProfile from './pages/Admin/AdminProfile/AdminProfile';
import AdminProducts from './pages/Admin/AdminProducts/AdminProducts';
import EditProduct from './pages/Admin/EditProduct/EditProduct';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Orders from './pages/Orders/Orders';

function App() {
  const dispatch = useDispatch();
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    let mounted = true;
    if(mounted) {
        dispatch(getProducts());
    }
    return () => {
        mounted = false;
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      
      <Switch>
        {/* HOME ROUTE */}
        <Route path="/" exact>
          {
            isAdmin === "true" ? <Redirect to="/admin/profile" /> : <Home />
          }
        </Route>

        {/* LOGIN ROUTE */}
        <Route path="/login">
          {
            token ? <Redirect to="/" /> : <Login />
          }
        </Route>

        {/* REGISTER ROUTE */}
        <Route path="/register">
          {
            token ? <Redirect to="/" /> : <Register />
          }
        </Route>

        {/* ABOUT ROUTE */}
        <Route path="/about">
          {
            isAdmin === "true" ? <Redirect to="/admin/profile" /> : <About />
          }
        </Route>

        {/* MENU ROUTE */}
        <Route path="/menu">
          {
            isAdmin === "true" ? <Redirect to="/admin/profile" /> : <Menu />
          }
        </Route>

        {/* CART ROUTE */}
        <Route path="/cart">
          {
            isAdmin === "true" ? <Redirect to="/admin/profile" /> : <Cart />
          }
        </Route>

        {/* CUSTOMER PROFILE ROUTE */}
        <Route path="/profile">
          {
            (isAdmin === "true" || !isAdmin) ? <Redirect to="/admin/profile" /> : <Profile />
          }
        </Route>

        {/* CUSTOMER ORDERS ROUTE */}
        <Route path="/orders">
          {
            (isAdmin === "true" || !isAdmin) ? <Redirect to="/admin/profile" /> : <Orders />
          }
        </Route>


        {/* ADMIN ROUTES */}

        {/* PROFILE ROUTE */}
        <Route path="/admin/profile">
          {
            isAdmin === "true" ? <AdminProfile /> : <Redirect to="/" />
          }
        </Route>

        {/* PRODUCTS ROUTE */}
        <Route path="/admin/products">
          {
            isAdmin === "true" ? <AdminProducts /> : <Redirect to="/" />
          }
        </Route>

        {/* ADD PRODUCT ROUTE */}
        <Route path="/admin/new-product">
          {
            isAdmin === "true" ? <NewProduct /> : <Redirect to="/" />
          }
        </Route>

        {/* EDIT PRODUCT ROUTE */}
        <Route path="/admin/edit-product/:prodId">
          {
            isAdmin === "true" ? <EditProduct /> : <Redirect to="/" />
          }
        </Route>

        {/* USERS ROUTE */}
        <Route path="/admin/users">
          {
            isAdmin === "true" ? <AdminUsers /> : <Redirect to="/" />
          }
        </Route>

        {/* ORDERS ROUTE */}
        <Route path="/admin/orders">
          {
            isAdmin === "true" ? <AdminOrders /> : <Redirect to="/" />
          }
        </Route>

      </Switch>
      <ScrollToTop />
      <Footer /> 
    </Router>
  );
}

export default App;
