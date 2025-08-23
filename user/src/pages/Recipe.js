import React from 'react'
import Axios from 'axios';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

function Recipe() {
    const [list,Setlist]=useState([])
    const location =useLocation()
  const  id =location.state.orid
  
    useEffect(()=>{
        Axios.get('http://localhost:1137/api/recipt',{params:{id:id}}).then((response)=>{
            Setlist(response.data)
        })
    })

    const Print =()=>{
  window.print()
    }
  return (
    <>
    

    <div class="recipt">
   <h1>Tech-Farm</h1>
   <div className="container">
   
 
    
        
   <h5 class="card-title">Profile Details</h5>

<div class="row">
<div class="col-lg-2"></div>
  <div class="col-lg-3">Recipt no.</div>
  <div class="col-lg-5">{list._id}</div>
</div>

{/* .substring(0, 2) */}

<div class="row">
<div class="col-lg-2"></div>
  <div class="col-lg-3 ">Product Name:</div>
  <div class="col-lg-5 ">{list.product_title}</div>
</div>

<div class="row">
<div class="col-lg-2"></div>
  <div class="col-lg-3 ">Product Quntity</div>
  <div class="col-lg-5 ">{list.number_of_products}</div>
</div>

<div class="row">
<div class="col-lg-2"></div>
  <div class="col-lg-3 ">Product price</div>
  <div class="col-lg-5 ">{list.price_of_product}</div>
</div>

<div class="row">
<div class="col-lg-2"></div>
  <div class="col-lg-3 ">Product Purchase Date</div>
  <div class="col-lg-5">{list.purchase_date}</div>
</div>

      

     



   </div>


 <button type='button' onClick={Print}>Print</button>
    </div>
           
    
    
    

    
    
    
    
    </>

  )
}

export default Recipe