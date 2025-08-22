

import React, { useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

function Payment() {
  const [showmodal, showaddressform] = useState(false);
  const [p_name, setname] = useState('');
  const [p_mob, setphnumber] = useState('');
  const [p_pincode, setpincode] = useState('');
  const [p_houseno, sethouse] = useState('');

  const [p_setarea, setarea] = useState('');
  const [p_setlamdmark, setlandmark] = useState('');
  const [p_setstate, setstate] = useState('');
  const[p_setdistrict,setdistrict]=useState("");
  const postdata = () => {

    Axios.post('http://localhost:1137/api/paymentdata', { p_name: p_name, p_mob: p_mob, p_pincode: p_pincode, p_houseno: p_houseno, p_setarea: p_setarea, p_setlamdmark: p_setlamdmark, p_setstate: p_setstate
  ,p_setdistrict:p_setdistrict }

    ).then((response) => {
      console.log(response)
      if (response !== "") {
        alert("Success");
        window.location = "/"
      }
      else {
        alert("wrong");
      }
    });

  }

  //  showformadd=()=>{
  //   showaddressform='true'
  //  }

  const openmodel = () => {
    showaddressform(true)
  }
  const closemodel = () => {
    showaddressform(false)
  }

  const Pamentaddress = () => {
    return (

      <>

        <section class="section">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-lg-6">

              <div class="payment">
                <div class="card-body">
                  <h1>Payment</h1>
                  <form>
                    <div class="row mb-8">
                      <label for="inputText" class="col-sm-8 paymetlabel"> Full name : </label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" placeholder="Enter your Name" required="?" onChange={(e) => setname(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <div class="row mb-8">
                      <label for="inputNumber" class="col-sm-8 paymetlabel">Mobile Number:</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" minLength="10" maxLength="10" placeholder="Enter your Phone Number" required="?" onChange={(e) => setphnumber(e.target.value)} />
                        </div>
                      </div>
                    </div>


                    <div class="row mb-8">
                      <label for="inputText" class="col-sm-8 paymetlabel">Pincode: </label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" placeholder="Enter your Name" required="?" onChange={(e) => setpincode(e.target.value)} />
                        </div>
                      </div>
                    </div>


                    <div class="row mb-8">
                      <label for="inputNumber" class="col-sm-8 paymetlabel">Flat,House no, Bulding, company , Apartments </label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" minLength="10" maxLength="10" placeholder="Enter your Phone Number" required="?" onChange={(e) => sethouse(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <div class="row mb-8">
                      <label for="inputNumber" class="col-sm-8 paymetlabel">Area ,Street ,Sector, Village</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="form-control" minLength="10" maxLength="10" placeholder="Enter your Phone Number" required="?" onChange={(e) => setarea(e.target.value)} />
                        </div>
                      </div>
                    </div>


                    <div class="row mb-8">
                      <label for="inputNumber" class="col-sm-8 paymetlabel">Landmark</label>
                      <div class="col-sm-12">
                        <div class="paymenttext">
                          <input type="text" class="  form-control" minLength="10" maxLength="10" placeholder="Enter your Phone Number" required="?" onChange={(e) => setlandmark(e.target.value)} />
                        </div>
                      </div>
                    </div>


                    <div class="row mb-8">
                     
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
                      </div>
                      <div class="row mb-8">
                        <label for="inputDistrict" class="col-sm-8 paymetlabel">District</label>
                        <div class="col-sm-12">
                        <div class="paymenttext">
                        <select class="form-control" id="inputDistrict" onChange={(e)=>setdistrict(e.target.value)}>
                          <option value="">-- select one -- </option>
                        </select>
                        </div>
                        </div>
                      </div>






                      <br />
                      <div class="row mb-3">

                        <div class="col-sm-12">
                        <div class="submitbtn">
                          <button type="button" class="btn btn-primary" onClick={postdata}>Submit</button>
                          </div>
                          <div class="paymentcancelbtn">
                          <button type="button" class="btn btn-primary" onClick={closemodel}>Cancel</button>
                          </div>
                        </div>
                      </div>
                      
                  </form>


                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
  }




  return (
    <>

      <div class="addresspayment">
        <button onClick={openmodel}>Your Adddress </button>
        {showmodal && <Pamentaddress />}
      </div>

    </>
  )
}

export default Payment