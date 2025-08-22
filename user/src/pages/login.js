import React, { useState } from "react";
import Axios from "axios";
import Searchbar from "../component/searchbar";
import { Link } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [u_email, setuemail] = useState('');

  const [u_password, setupass] = useState('');



  const singin = () => {
    window.location = "/Registration"
  }


  const onSubmit = () => {
  
    Axios.post('http://localhost:1137/api/loginuser',
      { u_email: u_email, u_password :u_password}
    ).then((response) => {
      if(response.data.msg) {
        alert(response.data.msg);
        
      }
      else {
        alert("Login Sucessfull");
        let obj1 = {u_email:u_email,u_password:u_password, _id: response.data[0]._id,u_firstname: response.data[0].u_firstname,u_lastname:response.data.u_lastname,u_dob:response.data[0].u_dob ,u_mob:response.data[0].u_mob,u_gender:response.data[0].u_gender}
        localStorage.setItem('mydata', JSON.stringify(obj1));
          window.location="/";
      }
    })
  }
 const loginadmin=()=>{

   Axios.post('http://localhost:1137/api/loginadmin',
{u_email:u_email, u_password:u_password}).then((responce)=>{
  if(responce.data.msg){
  alert(responce.data.msg)
  }
  else{
    alert("login Sucessfull");
    let obj2={u_email:u_email,u_password:u_password,_id:responce.data[0]._id,u_firstname:responce.data[0].u_firstname}
    localStorage.setItem('mydata1', JSON.stringify(obj2));
    let user = JSON.parse(localStorage.getItem('mydata1'));
    window.location = "http://localhost:3001?id="+user._id;
  }

})
 }

  return (
    <>

      <Searchbar />

      

      <section class="section">
        <div class="row">
          <div class="col-md-3"></div>
         
            <div class="col-lg-6">

              <div class="login">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div class="logincmp">
                  <h1>LOGIN</h1>
                  <Form.Field>
                  <label for="uname"><b>Username :</b></label>
                  <input type="text" placeholder=" Email" name="uname" required{... register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}  onChange={(e) => setuemail(e.target.value)} />
                  </Form.Field>
                  {errors.email && <p>Please check the Email</p>}
                  <Form.Field>
                  <label for="inputPassword"><b>Password  :</b></label>
                  <input type="password" placeholder=" Password" name="psw" class="form-control" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}required="?" minLength="8" onChange={(e) => setupass(e.target.value)} />
                         </Form.Field>
                         {errors.password && <p>Please check the Password</p>}
                  <button type="submit " > Login User</button>
                  <button type="button " onClick={loginadmin}> Login Admin</button><br />
                  <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                  </label>


                  <div class="singupforgot">
                    <button type="button" class="cancelbtn" onClick={singin}>Sign in</button>
                    
                    <label>
                     <Link to ="/Forgotpassword"> <b>Forgot Password ?</b></Link>
                    </label>
                 </div>
                </div>
                </Form>
              </div>
            </div>
           
          </div>
    
</section>
        
       
        </>


    );
} export default Login