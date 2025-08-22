
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Sidetest from './pages/sidetest';
import Schedule from './pages/schedule_request';
import './App.css';
/* Component section*/
import Header from './component/header';
import Footer from './component/footer';
import Mainhead from './component/mainhead';
import Searchbar from './component/searchbar';
import Sidebar from './component/sidebar';
import Carttry from './pages/carttry';

/* Home pages section*/
import Home from './pages/home';
import Registration from './pages/registration';
import Login from './pages/login';
import Forgotpassword from './pages/forgotpassword';
import Try from './component/try';
import Rouund from './pages/sidetest';

import About from './pages/about';
import Contactus from './pages/contactus';

import Cart1 from './pages/carttry';
import CartItem from './pages/Carditem';

/* Products and  Equipments  section*/
import Product from './pages/product';
import Equipment from './pages/equipment'; 
import Mainproduct from './pages/mainproduct';
import Payment from './pages/payment';
import Reg from './pages/Reg';
import Cart from './pages/cart';
import Myorders from './pages/myorders';
import Recipe from './pages/Recipe';
/* Schemes and  Subsidies  section*/
import Schemes from './pages/secheme';
import Subsidies from './pages/subsidies';
import Mainschemes from './pages/mainschemes';
import Mainsubsidies from './pages/mainsubsidies';


/*  post Section*/
import Postlist from './pages/postlist';
import Mainpost from './pages/mainpost';
import Allproductslist from './pages/post_all/allproductlist';
import Agriculturelist from './pages/post_all/agriculturelist';
import Fruitfarmainglist from './pages/post_all/fruit_farming';
import Vagetablefarming from './pages/post_all/vagetable_farming';

import Gardening from './pages/post_all/gardening';
import Fertilizer from './pages/post_all/fertilizers';
import Diseasecontrolandmanagement from './pages/post_all/diseasecontrolandmanagement';


import RIft from './pages/fft';
import Side from './pages/side';
import Profile from './pages/profile';
import Addreview from './pages/addreview';
import Showreview from './pages/showreview';

const languages = [
   { value: '', text: "Options" },
   { value: 'en', text: "English" },
   { value: 'gu', text: "ગુજરાતી" },
   { value: 'hi', text: "Hindi" },

]
 




function App() {

  return (
    <div className="App" id="outer-container">
     
     <Router>
   {/* <Side/> */}
     {/* <Sidebar/> */}
   {/* <Sidetest/> */}
    {/* <Searchbar/>   */}
    {/* <ResponsivePanel/> */}
        {/* <Header/> */}
        <Sidebar/>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Header' element={<Header/>}/>
        <Route exact path='/Contactus' element={<Contactus/>}/>
        <Route exact path='/About' element={<About/>}/>



          <Route exact path='/Registration' element={<Registration/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Profile' element={<Profile/>}/>



           <Route exact path='/Product' element={<Product/>}/>
           <Route exact path='/Equipment' element={<Equipment/>}/>
           <Route exact path='/Mainproduct' element={<Mainproduct/>}/>
           <Route exact path='/Payment' element={<Payment/>}/>
           <Route exact path="/Cart" element={<Cart/>}/>
           <Route exact path="/Reg" element={<Reg/>}/>
           <Route exact path='/Addreview' element={<Addreview/>}/>
           <Route exact path='/Showreview' element={<Showreview/>}/>
           <Route exact path='/Myorders' element={<Myorders/>}/>
           <Route exact path="/Recipe" element={<Recipe/>}/>
           
           <Route exact path="/Allproductslist" element={<Allproductslist/>}/>
            <Route exact path='/Postlist' element={<Postlist/>}/>
            <Route exact path='/Mainpost' element={<Mainpost/>}/>
           <Route exact path='/Agriculture' element={<Agriculturelist/>}/>
           <Route exact path="/Fruit" element={<Fruitfarmainglist/>}/>
           <Route exact path="/Vagetable" element={<Vagetablefarming/>}/>
           <Route exact path="/Gardaning" element={<Gardening/>}/>
           <Route exact path="/Fertilizer" element={<Fertilizer/>}/>
            <Route exact path ="/Diseasecontrolandmanagement" element={<Diseasecontrolandmanagement/>}/>



            <Route exact path='/Sechemes' element={<Schemes/>}/>
            <Route exact path='/Subsidies' element={<Subsidies/>}/>
            <Route exact path='/Mainschemes' element={<Mainschemes/>}/>
            <Route exact path='/Mainsubsidies' element={<Mainsubsidies/>}/> 
            <Route exact path='/Carditem' element={<CartItem/>}/>
            
            <Route exact path='/Carttry' element={<Carttry/>}/>
            <Route exact path='/Forgotpassword' element={<Forgotpassword/>}/>
            <Route exact path='/Schedule' element={<Schedule/>}/>
            <Route exact path='/fff' element={<RIft/>}/>
            <Route exact path='/rod' element={<Rouund/>}/>
        </Routes>
{/* <Profile/> */}
    
      {/* <Postlist/> */}
{/* <Reg/> */}
        {/* <Try/> */}
        {/* <Productmain/> */}
        {/* <Payment/> */}
        <Footer />
  
        {/* <Mainpost/> */}
        {/* <Postshow/> */}
        {/* <Sidebar/> */}
      </Router>
    </div>

    
  ); 

}

export default App;
