import React from "react";
import Axois from "axios";
import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

let user= JSON.parse(localStorage.getItem("mydata"));
const u_email =user.u_email;
function Myorders() {
   
    const [list, Setlist]= useState([]);
 
      
   useEffect(() => {
      Axois.get('http://localhost:1137/api/payment_info',{params:{u_email:u_email}}).then((responce)=>{
         Setlist(responce.data)
      })
   },[]);


   return (
    <>

    </>
  )
}

export default Myorders