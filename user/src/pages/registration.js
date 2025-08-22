
import React, { useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import Searchbar from '../component/searchbar'

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [u_firstname, setfirstname] = useState('');

  const [u_lastname, setlastname] = useState('');
  const [u_mob, setphnumber] = useState('');
  const [u_dob, setdateofbirth] = useState('');
  const [u_gender, setgen] = useState('');

  const [u_email, setemail] = useState('');
  const [u_password, setpassword] = useState('');

  const onSubmit = (data) => {
    

   if (u_email && u_password == null){
     alert("enter detalis")
   }
else{
    Axios.post('http://localhost:1137/api/registration1', { u_firstname: u_firstname, u_lastname: u_lastname, u_mob: u_mob, u_dob: u_dob, u_gender: u_gender, u_email: u_email, u_password: u_password }

    ).then((response) => {
      console.log(response)
      if (response.data.msg) {
        alert(response.data.msg);

      }
      else {
        alert("sucess");
        window.location = "/"
      }
    });
  }
  }



  return (

    <>
      <Searchbar />

      <section class="section">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-lg-6">

            <div class="register">
              <div class="card-body">
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Registration</h1>
                  
                    <Form.Field>
                      <div class="row mb-8">
                        <label for="inputText" class="col-sm-3 col-form-label">First name: </label>
                        <div class="col-sm-8">
                          <input type="text"  placeholder="Enter your Name" required="true" 
{...register("firstName", { required: true, maxLength: 10 })}
                              onChange={(e) => setfirstname(e.target.value)}
                          />
                        </div>
                      </div>
                      </Form.Field>
                      {errors.firstName && <p>Please check the First Name</p>}
                      <Form.Field>
                      <div class="row mb-8">
                          <label for="inputText" class="col-sm-3 col-form-label">Last Name: </label>
                          <div class="col-sm-8">
                            <input type="text" class="form-control" placeholder="Enter your Name" {...register("lastname", { required: true, maxLength: 10 })}required="?" onChange={(e) => setlastname(e.target.value)} />
                          </div>
                        </div>
                        </Form.Field>
                        {errors.lastname && <p>Please check the First Name</p>}
                        <Form.Field>
                        <div class="row mb-8">
                          <label for="inputNumber" class="col-sm-3 col-form-label">Phone Number:</label>
                          <div class="col-sm-8">
                            <input type="tel" class="form-control" minLength="10" maxLength="10"{...register("phone", { required: true, maxLength: 10 })} placeholder="Enter your Phone Number" required="?" onChange={(e) => setphnumber(e.target.value)} />
                          </div>
                        </div>
</Form.Field>
{errors.phone && <p>Please check the phone Number</p>}

                        <div class="row mb-8">
                          <label for="inputDate" class="col-sm-3 col-form-label">Date of Birth:</label>
                          <div class="col-sm-8">
                            <input type="date" class="form-control" required="?" onChange={(e) => setdateofbirth(e.target.value)} />
                          </div>
                        </div>

                        <fieldset class="row mb-8">
                          <div class="gender">
                            <legend class="col-form-label col-sm-3 pt-0">Gender:</legend>

                            <div class="col-sm-8">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="mailrad" value="male" onChange={(e) => setgen(e.target.value)} />
                                <label class="form-check-label" for="mailrad"  >
                                  Male
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="femalerad" value="female" required="" onChange={(e) => setgen(e.target.value)} />
                                <label class="form-check-label" for="femalerad">
                                  Female
                                </label>
                              </div>
                              <div class="form-check ">
                                <input class="form-check-input" type="radio" name="gender" id="otherrad" value="other" onChange={(e) => setgen(e.target.value)} />
                                <label class="form-check-label" for="otherrad" >
                                  Other
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>





                        <Form.Field>
                        <div class="row mb-8">
                          <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                          <div class="col-sm-8">
                            <input type="email" class="form-control" placeholder="Enter your Email"{...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} pattern="[^ @]*@[^ @]*"
                              required="?" onChange={(e) => setemail(e.target.value)} />
                          </div>
                        </div>
                        </Form.Field>   
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                        <div class="row mb-8">
                          <label for="inputPassword" class="col-sm-3 col-form-label">Password:</label>
                          <div class="col-sm-8">
                            <input type="password" class="form-control" placeholder="Create your password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}required="?" minLength="8" onChange={(e) => setpassword(e.target.value)} />
                          </div>
                        </div>
                        </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                        <br />
                        <div class="row mb-3">

                          <div class="col-sm-12">
                          <Button type='submit' class="btn btn-primary">Register</Button>
                          </div>
                        </div>



                   
                  </Form>
              </div>
            </div>
            </div>
            </div>
          </section>

        </>
        );
}
        export default Registration;