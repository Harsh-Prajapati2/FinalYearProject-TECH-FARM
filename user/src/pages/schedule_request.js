
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState,useEffect } from 'react';



function Schedule(){
    const asteps = ["Account Details", "Address", "Billing Address"];
   var r=true;
      const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");


  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleZipChange = (e) => setZip(e.target.value);
  const handleStepClick = (stepIndex) => {
    setStep(stepIndex);
  };
    return(
        <>
         



            <div class="content-body">

            <div class="row page-titles mx-0">
                <div class="col p-md-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
                    </ol>
                </div>
            </div>
         

            <div class="container-fluid">

                        <div className="row steps clearfix" >
        {asteps.map((stepTitle, index) => (
          <button
            key={index}
            className={`btn btn-primary ${index === step ? "active" : ""}`}
            onClick={() => handleStepClick(index)}
          >
            {stepTitle}
          </button>
        ))}&nbsp;
      </div>
                <div class="row">

                <div className="col-md-12 ">
         
      <form action="#"  class="step-form-horizontal" id="step-form-horizontal">
        {step === 0 && (
          <div>
            <h4>Account Details</h4>
            <section>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" name="username" className="form-control" placeholder="Username" required={r}  onChange={handleUsernameChange} value={username} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="password" name="Password" className="form-control" placeholder="Password" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" required />
                  </div>
                </div>
              </div>
            </section>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next1
              </button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h4>Your Address</h4>
            <section>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" name="firstName" className="form-control" placeholder="First Name" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" name="lastName" className="form-control" placeholder="Last Name" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" name="address" className="form-control" placeholder="Address" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" name="city" className="form-control" placeholder="City" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" name="zip" className="form-control" placeholder="ZIP Code" required />
                  </div>
                </div>
              </div>
            </section>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button> &nbsp;
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
            <>
           <h4>Billing Details</h4>
           <section>
               <div class="row">
                   <div class="col-6">
                       <div class="form-group">
                           <input class="form-control" type="text" name="creditCard" placeholder="Credit Card Number"/>
                       </div>
                   </div>
                   <div class="col-6">
                       <div class="form-group">
                           <input class="form-control" type="text" name="date" placeholder="Expiration Date"/>
                       </div>
                   </div>
                   <div class="col-12">
                       <div class="form-group">
                           <input class="form-control" type="text" name="owner" placeholder="Credit Card Owner"/>
                       </div>
                   </div>
               </div>
           </section>
           <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button>&nbsp;
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
            </>
        )}
 {step === 3 && (
<>
<h4>Confirmation</h4>
                                <section>
                                    <div class="row h-100">
                                        <div class="col-12 h-100 d-flex flex-column justify-content-center align-items-center">
                                            <h2>You have submitted form successfully!</h2>
                                            <p>Thank you very much for you information. we will procceed accordingly.</p>
                                        </div>
                                    </div>
                                </section>
                                <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button>
             
            </div>


</>


 )}

        
        </form></div>



              



                </div>
            </div>
            
        </div>




        </>
    );
}

export default Schedule;