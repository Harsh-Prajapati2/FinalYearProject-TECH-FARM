import React, { useState } from "react";
import { useBetween } from "use-between";
import Axios from "axios"
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import './reg.css';
// import './hhhh.js'
import {useLocation } from "react-router-dom";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const current = new Date();
const upload_date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;



var onSubmit =  ( currentval,_id ,titl,num,upload_date,u_email,primg,p_name,p_mob,p_pincode,p_houseno,p_setarea,p_setlamdmark,p_setstate,p_setdistrict) => {

  // var merchant_order_id = randomIntFromInterval(1000, 6000);
  // var famt = parseInt(currentval) * parseInt(num);
  var famt = parseInt(currentval);
  var options = {
    "key": "rzp_test_znsgOy5truI7Xv",
    "amount": famt * 100, // 2000 paise = INR 20
    "name": "Tech-Farm",
    "description": titl,
    "currency": "INR",
    "netbanking": true,
    prefill: {
      name: "Grow_Smart",
      email: "grosmarmsu@gmail.com",
      contact: 7283818506,
    },
    notes: {
      soolegal_order_id: 123,
    },
    "handler": function (response) {

      Axios.post('http://localhost:1137/api/verify',
      {_id:_id,currentval:currentval,titl:titl,num:num,
        primg:primg,upload_date:upload_date ,p_name:p_name, p_mob:p_mob,
        p_pincode:p_pincode,p_houseno:p_houseno
        ,p_setarea:p_setarea,
        p_setlamdmark:p_setlamdmark,
        p_setstate:p_setstate
        ,p_setdistrict:p_setdistrict,
         u_email:u_email}).then((response)=>{
      	if(response.data.message)
      	{
      		alert(response.data.message);
      		window.location = "/" 
      	}
      	else
      	{

      		alert("UNSUCCESS");
      		window.location = "/Mainproduct" 
      	}
      });

    },

    "theme": {
      "color": "#528FF0"
    }
  };

  var rzp1 = new window.Razorpay(options);
  rzp1.open();


}













// Make a custom hook with your future shared state
const useFormState = () => {
 
  const [p_name, setname] = useState('');

  const [p_mob, setphnumber] = useState('');
  const [p_pincode, setpincode] = useState('');
  const [p_houseno, sethouse] = useState('');

  const [p_setarea, setarea] = useState('');
  const [p_setlamdmark, setlandmark] = useState('');
  const [p_setstate, setstate] = useState('');
  const[p_setdistrict,setdistrict]=useState("");
  

  return { 
    p_name,setname, p_mob,setphnumber , p_pincode,setpincode, p_houseno,sethouse, p_setarea,setarea, p_setlamdmark,setlandmark, p_setstate,setstate, p_setdistrict,setdistrict
  };
};

// Make a custom hook for sharing your form state between any components
const useSharedFormState = () => useBetween(useFormState);

const FirstComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Use the shared hook!
  const { p_name,setname, p_mob,setphnumber , p_pincode,setpincode, p_houseno,sethouse, p_setarea,setarea, p_setlamdmark,setlandmark, p_setstate,setstate, p_setdistrict,setdistrict} = useSharedFormState();
  
  return (
<>
<div class="main-container">
	<img src="assests/images/reg-logo.png" class="reg-img" alt=""/>
	
	{/* <h3 class="text-center text-danger">Welcome to</h3> */}
	 {/* <img src="assests/images/reg-logo.png" class="reg-img" alt=""/> */}
   <h1>Add Address</h1>
   <Form> 

                    <div class="row mb-8">
                    <Form.Field>
                      <label for="inputText" class="col-sm-8 paymetlabel"> Full name : </label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" {...register("name", { required: true })} placeholder="Enter your Name" required="?" onChange={(e) => setname(e.target.value)} />
                        </div>
                     
                    </div>
                    </Form.Field>
                    {errors.name && <p>Please check the First Name</p>}
                    </div>
                    
                     
                    <div class="row mb-8">
                    <Form.Field>
                      <label for="inputNumber" class="col-sm-12 paymetlabel">Mobile Number:</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="phone" class="form-control" minLength="10" maxLength="10" placeholder="Enter your Phone Number" required="?" {...register("moblie", { required: true, maxLength:10,minLength:10 })} onChange={(e) => setphnumber(e.target.value)} />
                        </div>
                      </div>
                      </Form.Field>
                      {errors.mobile && <p>Please check the phone Number</p>}
                    </div>


                    <div class="row mb-8">
                    <Form.Field>
                      <label for="inputText" class="col-sm-12 paymetlabel">Pincode: </label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="phone" class="form-control" minLength="6" maxLength="6" placeholder="Enter your Phone Number" required="?"  {...register("pincode", { required: true,maxLength:6, minLength:6 })}  onChange={(e) => setpincode(e.target.value)} />
                        </div>
                      </div>
                      </Form.Field>
                      {errors.pincode && <p>Please check the First Name</p>}
                    </div>


                    <div class="row mb-8">
                    <Form.Field>
                      <label for="inputNumber" class="col-sm-12 paymetlabel">Flat,House no, Bulding, company , Apartments </label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control"  {...register("flate", { required: true })} placeholder="Enter your Flat,House no, Bulding, company" required="?"  onChange={(e) => sethouse(e.target.value)} />
                        </div>
                      </div>
                      </Form.Field>
                    </div>

                    <div class="row mb-8">
                    <Form.Field>
                      <label for="inputNumber" class="col-sm-12 paymetlabel">Area ,Street ,Sector, Village</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" placeholder="Enter your Area ,Street ,Sector, Village" required="?"  {...register("area", { required: true })} onChange={(e) => setarea(e.target.value)} />
                        </div>
                      </div>
                      </Form.Field>
                      {errors.area && <p>Please check the Area</p>}
                    </div>


                    <div class="row mb-8">
                    <Form.Field>
                      <label for="inputNumber" class="col-sm-12 paymetlabel">Landmark</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="  form-control"  placeholder="Enter your Landmark" required="?" {...register("landmark", { required: true })}  onChange={(e) => setlandmark(e.target.value)} />
                        </div>
                      </div>
                      </Form.Field>
                      {errors.landmark && <p>Please check the Landmark</p>}
                    </div>


                    <div class="row mb-8">
                    <Form.Field>
                        <label for="inputState" class="col-sm-12 paymetlabel">State</label>
                        <div class="paymenttext">
                        <select class="form-control" id="inputState" onChange={(e) => setstate(e.target.value)
                        }>
                          <option value="SelectState">Select State</option>
                          <option value="Andra Pradesh">Andra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madya Pradesh">Madya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Orissa">Orissa</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttaranchal">Uttaranchal</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="West Bengal">West Bengal</option>
                          <option disabled >UNION Territories</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadeep">Lakshadeep</option>
                          <option value="Pondicherry">Pondicherry</option>
                        </select>
                      </div>
                      </Form.Field>
                      </div>
                     
                      <div class="row mb-8">
                    <Form.Field>
                      <label for="inputNumber" class="col-sm-12 paymetlabel">District</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" {...register("district", { required: true })} placeholder="Enter your district" required="?"  onChange={(e) => setdistrict(e.target.value)} />
                        </div>
                      </div>
                      </Form.Field> {errors.district && <p>Please check the district</p>}
                    </div>




                      <br />
                      {/* <div class="row mb-3">

                        <div class="col-sm-12">
                        <div class="submitbtn">
                          <button type="button" class="btn btn-primary" onClick={postdata}>Submit</button>
                          </div>
                          <div class="paymentcancelbtn">
                          <button type="button" class="btn btn-primary" onClick={closemodel}>Cancel</button>
                          </div>
                        </div>
                      </div> */}
             		                          
   </Form>
		</div>						
	</>							

  );
};



// const FinalComponent = () => {
//   // Use shared hook!
//   const { email, username, lastname, phone, dob } = useSharedFormState();
//   return (
//     // <p>
//     //   First Name: {username} <br />
// 	//   Last Name: {lastname} <br />
//     //   Email: {email} <br />
// 	//   Phone Number: {phone} <br />
//     // </p>
// 	<div class="main-container">

// <img src="assests/images/reg-logo.png" class="reg-img" alt=""/>
// <h2 class="text-center text-info">Overview</h2>

// 								<div class="form-wrap max-width-600 mx-auto">
// 									<ul class="register-info">
// 									<li>
// 											<div class="row">
// 												<div class="col-sm-4 weight-600">Email ID</div>
// 												<div class="col-sm-8">{email}</div>
// 											</div>
// 										</li>
// 										<li>
// 											<div class="row">
// 												<div class="col-sm-4 weight-600">Full Name</div>
// 												<div class="col-sm-8">{username} &nbsp; {lastname}</div>
// 											</div>
// 										</li>
// 										<li>
// 											<div class="row">
// 												<div class="col-sm-4 weight-600">Role</div>
// 												<div class="col-sm-8"> </div>
// 											</div>
// 										</li>
// 										<li>
// 											<div class="row">
// 												<div class="col-sm-4 weight-600">Date of birth</div>
// 												<div class="col-sm-8">{dob}</div>
// 											</div>
// 										</li>
// 										<li>
// 											<div class="row">
// 												<div class="col-sm-4 weight-600">Gender</div>
// 												<div class="col-sm-8"> </div>
// 											</div>
// 										</li>
// 										<li>
// 											<div class="row">
// 												<div class="col-sm-4 weight-600">Phone Number</div>
// 												<div class="col-sm-8">{phone}</div>
// 											</div>
// 										</li>
// 									</ul>
// 									<div class="custom-control custom-checkbox mt-4">
// 										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
// 										<label class="custom-control-label" for="customCheck1">I have read and agreed to the terms of services and privacy policy</label>
// 									</div>
// 								</div>
// 								</div>
							
//   );
// };


 
export const Reg = () => {

	const location =useLocation();
  const currentval = location.state?.currentval;

   const _id=location.state.pridval;
   const num =location.state?.num
   const titl= location.state.titl
  const  primg= location.state.pht

   let user = JSON.parse(localStorage.getItem('mydata'));
   const u_email = user.u_email;
   const {p_name,p_mob,p_pincode,p_houseno,p_setarea,p_setlamdmark,p_setstate,p_setdistrict} =useSharedFormState();


   const { register, handleSubmit, formState: { errors } } = useForm();

 
  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'Enter Address', isDone: false, component: FirstComponent },
   
    // { key: 'finalStep', label: 'My Final Step', isDone: false, component: FinalComponent },
  ]);

const [activeStep, setActiveStep] = useState(steps[0]);
 
const handleNext = () => {
	if (steps[steps.length - 1].key === activeStep.key) {
	  alert('You have completed all steps.');
	  return;
	}
   
	const index = steps.findIndex(x => x.key === activeStep.key);
	setSteps(prevStep => prevStep.map(x => {
	  if (x.key === activeStep.key) x.isDone = true;
	  return x;
	}))
	setActiveStep(steps[index + 1]);
  }
   
  const handleBack = () => {
	const index = steps.findIndex(x => x.key === activeStep.key);
	if (index === 0) return;
   
	setSteps(prevStep => prevStep.map(x => {
	  if (x.key === activeStep.key) x.isDone = false;
	  return x;
	}))
	setActiveStep(steps[index - 1]);
  }
return(

  <>
   <div class="main-container1">
      {/* <h4>Step wizard in React - <a href="https://www.cluemediator.com" title="Clue Mediator" target="_blank" rel="nofollow noopener noreferrer">Clue Mediator</a></h4> */}
      <div className="box">
        <div className="steps">
          <ul className="nav">
            {steps.map((step, i) => {
              return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                <div>Step {i + 1}<br /><span>{step.label}</span></div>
              </li>
            })}
          </ul>
        </div>
        <div className="step-component">
          {activeStep.component()}
        </div>
        <div className="btn-component">
          {/* <input type="button" class="btn btn-danger" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />  */}
          {/* <button type="submit"  onSubmit={onSubmit(currentval, _id, titl, num , upload_date ,p_name ,p_mob ,p_pincode ,p_houseno ,p_setarea ,p_setlamdmark ,p_setstate , p_setdistrict ,u_email,)}>Submit</button> */}

          <input type="submit" class="btn btn-success"value={steps[steps.length - 1].key !== activeStep.key ? 'Submit' : 'Payment'} onClick={  () => onSubmit(currentval, _id, titl,num,upload_date, u_email,primg,p_name ,p_mob ,p_pincode ,p_houseno ,p_setarea ,p_setlamdmark ,p_setstate , p_setdistrict , )} />
       


       
        </div>
      </div>
     
      </div>
   
    </>
);
}
export default Reg;