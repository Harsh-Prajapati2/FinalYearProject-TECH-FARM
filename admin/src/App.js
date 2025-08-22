import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';


import Header from './component/header';
import Sidebar from './component/sidebar';
import Footer from './component/footer';

import Agriculture from './pages/upload_agriculture';
import Fruit from './pages/upload_fruit';
import Vegetable from './pages/upload_vegetable';
import Gardening from './pages/upload_gardening';
import Fertilizer from './pages/upload_fertilizer';
import Product from './pages/upload_product';
import Equipment from './pages/upload_equipment';
import Scheme from './pages/upload_scheme';
import Disease from './pages/upload_disease';
import Profile from './pages/profile';
import Payment from './pages/payment';
import Review from './pages/review';
import Subside from './pages/upload_subside';
import Support from './pages/support';
import Manage_agriculture from './pages/manage_agriculture';
import Manage_fruit from './pages/manage_fruit';
import Manage_vegetable from './pages/manage_vegetable';
import Manage_gardening from './pages/manage_gardening';
import Manage_fertilizer from './pages/manage_fertilizer';
import Manage_disease from './pages/manage_disease';
import Manage_product from './pages/manage_product';
import Manage_equipment from './pages/manage_equipment';
import Manage_scheme from './pages/manage_scheme';
import Manage_subside from './pages/manage_subside';



function App() {
  return (
    <Router>
      <Header/>
       <Sidebar/>
        <Routes>

          <Route exact path='/' element={<Agriculture/>}/>
          <Route exact path='/Agriculture' element={<Agriculture/>}/>
          <Route exact path='/Fruit' element={<Fruit/>}/>
          <Route exact path='/Vegetable' element={<Vegetable/>}/>
          <Route exact path='/Gardening' element={<Gardening/>}/>
          <Route exact path='/Fertilizer' element={<Fertilizer/>}/>
          <Route exact path='/Product' element={<Product/>}/>
          <Route exact path='/Equipment' element={<Equipment/>}/>
          <Route exact path='/Scheme' element={<Scheme/>}/>
          <Route exact path='/Disease' element={<Disease/>}/>
          <Route exact path='/Profile' element={<Profile/>}/>
          <Route exact path='/Payment' element={<Payment/>}/>
          <Route exact path='/Review' element={<Review/>}/>
          <Route exact path='/Subside' element={<Subside/>}/>
          <Route exact path='/Support' element={<Support/>}/>
          
          <Route exact path='/Manage_agriculture' element={<Manage_agriculture/>}/>
          <Route exact path='/Manage_fruit' element={<Manage_fruit/>}/>
          <Route exact path='/Manage_vegetable' element={<Manage_vegetable/>}/>
          <Route exact path='/Manage_gardening' element={<Manage_gardening/>}/>
          <Route exact path='/Manage_fertilizer' element={<Manage_fertilizer/>}/>
          <Route exact path='/Manage_disease' element={<Manage_disease/>}/>
          <Route exact path='/Manage_product' element={<Manage_product/>}/>
          <Route exact path='/Manage_equipment' element={<Manage_equipment/>}/>
          <Route exact path='/Manage_scheme' element={<Manage_scheme/>}/>
          <Route exact path='/Manage_subside' element={<Manage_subside/>}/>
          

        </Routes>
        <Footer/>
    </Router>  
  );
}
export default App;
