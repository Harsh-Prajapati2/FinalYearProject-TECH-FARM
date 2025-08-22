import React from 'react'
import { useState,useEffect } from 'react';
import Axios from 'axios';


function Forgotpassword() {
    const [u_email, setuemail] = useState('');
    const [list, Setlist]= useState([]);

    function sendotp (){
      // alert(u_email);
      Axios.post("http://localhost:1137/api/forgot_password",{u_email:u_email }).then((response)=>{
if(response.data.message){
  alert(response.data.message);
  window.location='/Login'
}
else{
alert("Email not found")
}
});
}
  return (
   <>
    
    <section class="section">
        <div class="row">
          <div class="col-md-3"></div>
            <div class="col-lg-6">

              <div class="login">

                <div class="logincmp">
                  <h1>Forgot Password</h1>
                  <label for="uname"><b>Enter Your Email :</b></label>
                  <input type="text" placeholder=" Email" name="uname" required onChange={(e) => setuemail(e.target.value)} />
                  <br />
                  
                 


                  <div class="singupforgot">
                    <button type="button" class="cancelbtn" onClick={sendotp}>Send OTP</button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
    
</section>
        
       
   </>
  );
}

export default Forgotpassword