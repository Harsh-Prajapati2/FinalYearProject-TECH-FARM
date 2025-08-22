
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import { Button, Form, Input } from "reactstrap";
import Axios from "axios";

import { useForm } from "react-hook-form";


 function Addreview() {


    let user =JSON.parse(localStorage.getItem("mydata"));
    const { register, handleSubmit, formState: { errors } } = useForm();
const current = new Date();
const upload_date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
const location= useLocation();
const _id=location.state.prid;

   let u_email= user.u_email
   let u_firstname= user.u_firstname;

   
  const [reviews, setReviews] = useState("");
  const onSubmit = () => {

    Axios.post('http://localhost:1137/api/addreview',{
        _id:_id,u_email:u_email,u_firstname:u_firstname,reviews:reviews,upload_date:upload_date
    }).then((response)=>{
        console.log(response)
        alert('sucess');
    })
  };

  return (

    <div className="form-container">
    <h4>Add review</h4>
    <div class="addreview">
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="textreview"
          type="textarea"
          placeholder="Add your reviews"
          value={reviews}
          onChange={(e)=> setReviews(e.target.value)}
        />
        <Button type="submit"  className="addreviewbtn">
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
}export default Addreview