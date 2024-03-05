import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home";

import Wishlist from './pages/wishlist/Wishlist';
import Account from "./pages/account/Account"
import Login from "./pages/login/Login"
import Mountain from "./pages/Category/mountain/Mountain"
import Beach from "./pages/Category/beach/Beach"
import Safari from "./pages/Category/safari/Safari"
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Order from "./pages/Order/Order"
import OrderDetails from "./pages/Order/OrderDetails";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CheckOut from "./pages/checkOut/checkOut";
import CartDetails from "./pages/cart/CartDetails";
import OverView from "./pages/account/OverView";
import Profile from "./pages/account/Profile";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardetails" element={<CartDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/overview" element={<OverView />} />
          <Route path='/orders' element={<Order />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/checkout" element={<CheckOut />} />


          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/mountain" element={<Mountain />} />
          <Route path="/beach" element={<Beach />} />
          <Route path="/safari" element={<Safari />} />




        </Routes>
      </BrowserRouter>
      <Footer />
    </>


  );
}

export default App;
