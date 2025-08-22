import React, { useState } from "react";
import Axios from 'axios';
import Searchbar from "../component/searchbar";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function Contactus() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [setnamecontact, setnamecont] = useState('');
    const [setemailcontact, setemailcont] = useState('');
    const [setphonecontact, setphonecont] = useState('');
    const [setsubjectcontact, setsubjectcont] = useState('');
    const [setmessagecontact, setmessagecont] = useState('');

    const onSubmit = () => {
      
   
        Axios.post('http://localhost:1137/api/Contact_submit',{
            
            setnamecontact:setnamecontact, setemailcontact:setemailcontact, setphonecontact:setphonecontact, setsubjectcontact: setsubjectcontact, setmessagecontact:setmessagecontact}).then((response)=>{
        console.log(response)
        if(response!=="")
        {
          alert("Success");
          window.location="/"
        }
        else
        {
         alert("wrong");
        }
        
    });} 
    return (
        <>

            <Searchbar />

            <div class="content">

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mr-auto">
                            <div class="contactus">
                                <h2>Contact Us</h2>
                                {/* <p class="mb-5"></p> */}

                                <ul class="list-unstyled pl-md-5 mb-5">
                                    <li class="d-flex text-black mb-2">
                                        <span class="mr-3">Address:
                                        </span> 34 Grow Smart Ltd, Ankelshwar-393001,Gujarat India
                                    </li>
                                    <li class="d-flex text-black mb-2"><span class="mr-3">Phone:</span> +91 7283818506</li>
                                    <li class="d-flex text-black"><span class="mr-3">Email:</span> growsmartmsu@gmail.com </li>
                                </ul>
                            </div>
                        </div>
                       
                        <div class="col-md-6">
                        <div class="form-handle">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                                <div class="row">
                                <Form.Field>
                                    <div class="col-md-12 form-group">
                                    
                                        <label for="name" class="col-form-label1">Name:</label>
                                        <input type="text" class="form-control" name="name" id="name" required="?"{...register("name", { required: true,  })} onChange={(e) => setnamecont(e.target.value)} />
                                      
                                    </div>
                                    </Form.Field>
                                </div>
                                <div class="row">
                                <Form.Field>
                                    <div class="col-md-12 form-group">
                                        <label for="email" class="col-form-label1">Email:</label>
                                        <input type="text" class="form-control" name="email" id="email" required="?" {...register("email", { required: true,  })} onChange={(e) => setemailcont(e.target.value)} />
                                    </div>
                                    </Form.Field>
                                </div>

                                <div class="row">
                                <Form.Field>
                                    <div class="col-md-12 form-group">
                                        <label for="phone" class="col-form-label1">Phone:</label>
                                        <input type="tel" class="form-control" name="phone" id="phone" required="?" {...register("phone", { required: true,  })} onChange={(e) => setphonecont(e.target.value)} />
                                    </div>
                                    </Form.Field>
                                </div>

                                <div class="row">
                                <Form.Field>
                                    <div class="col-md-12 form-group">
                                        <label for="message" class="col-form-label1">Subject:</label>
                                        <input type="text" class="form-control" name="subject" id="subject" required="?"
                                        {...register("subject", { required: true,  })} onChange={(e) => setsubjectcont(e.target.value)} />
                                    </div>
                                    </Form.Field>
                                </div>

                                <div class="row">
                                <Form.Field>
                                    <div class="col-md-12 form-group">
                                        <label for="message" class="col-form-label1">Message:</label>
                                        <textarea class="form-control" name="message" id="message" cols="30" rows="4" required="?" {...register("message", { required: true,  })} onChange={(e) => setmessagecont(e.target.value)}></textarea>
                                    </div>
                                    </Form.Field>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        {/* <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4" />
                                        <span class="submitting" onClick={submitcontactus}></span> */}

                                        <button type="submit" class="btn btn-primary rounded-0 py-2 px-4" >SUBMIT</button>
                                    </div>
                                </div>
                           

                                </Form>
                                </div>
                        </div>
                      
                    </div>      </div>
            </div>

        </>

    );

} export default Contactus;