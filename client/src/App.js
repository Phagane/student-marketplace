import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import HomeLayout from './components/Homepage/HomeLayout';
import CategoryPage from './components/Products/CategoryPage';
import Categories from './components/Homepage/Categories';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Homepage/Cart';
import Login from './components/Authentication/login';
import Register from './components/Authentication/Register';



const App = () => {
  return (
    <div className="App">
        <Header />

         <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<HomeLayout/>}/>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Categories />} />
          <Route path="/:categoryName" element={<CategoryPage />}/>
          <Route path="/product/:productName" element={<ProductDetails />}/>
         </Routes>
          
        <Footer />   
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
