
import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
   <>

      <div class="footer_section layout_padding">
         <div class="container">
            {/* <div class="footer_logo"><a href="index.html"><img src="resource/images/logo.jpg"/></a></div> */}
            {/* <div class="input_bt">
               <input type="text" class="mail_bt" placeholder="Your Email" name="Your Email"/>
               <span class="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
            </div> */}
            <div class="footer_menu">
               <ul>
               <li><Link to ="/">Home</Link></li>
                  <li><Link to="/Product">Products</Link></li>
                  <li><Link to="/Equipment">Equipments</Link></li>
                  <li><Link to ="/Subsidies">Subsidies</Link></li>
                  <li><Link to ="/Sechemes">Schemes</Link></li>
                 
               </ul>
            </div>
            <div class="location_main">Help Line  Number : +91 7283818506</div>
             <div class="location_main">Help Email Address : growsmartmsu@.com</div>
            
         </div>
      </div>
  
      <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">© 2023 All Rights Reserved.Grow Smart</p>
         </div>
      </div>


   </>
  )
}

export default Footer