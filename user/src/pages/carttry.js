import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import Searchbar from '../component/searchbar';

function Carttry() {
  return (
   <>

<Searchbar/>
<div class="row">
 <div class="Cart-Container">
 <div class="Header">
 <h3 class="Heading">Shopping Cart</h3>
 <h5 class="Action">Remove all</h5>
 </div>
 
 <div class="Cart-Items">
 <div class="image-box">
 <img src="images/apple.png"  />
 </div>
 <div class="about">
 <h1 class="title">Apple Juice</h1>
 <h3 class="subtitle">250ml</h3>
 <img src="images/veg.png" />
 </div>
 <div class="counter">
 <div class="btn">+</div>
 <div class="count">2</div>
 <div class="btn">-</div>
 </div>
 
<div class="prices">
 <div class="amount">$2.99</div>
 <div class="save"><u>Save for later</u></div>
 <div class="remove"><u>Remove</u></div>
 </div>
 </div>
 
 

 </div>
</div>

   </>
  )
}

export default Carttry
