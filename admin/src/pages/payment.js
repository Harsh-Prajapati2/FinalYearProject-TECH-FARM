import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

function Payment() {

    
    
    
    var count = 1;
    const [list, setlist] = useState([]);


    
  useEffect(() => {
    Axios.get('http://localhost:1137/api/payment_info',
      {
      }).then((response) => {
        setlist(response.data);

      });

  }, []);


    return (
        <>


     


<div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="main-body">
                        <div class="page-wrapper">


 <div class="row">
   <div class="col-lg-12">

      <div class="card">
       <div class="card-body">
          <h5 class="card-title">Payment</h5>
         


         <table class="table datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name of Product</th>
                    <th scope="col">Price of Product</th>
                    <th scope="col">Transection_id</th>
                    <th scope="col">Date of Payment</th>

                  </tr>
                </thead>
                <tbody>

          {list.map((val) => {
            return (


             
                  <tr>
                    <th scope="row">{count++}</th>
                               
                    
                    <td>{val.product_title}</td>
                    <td>{val.price_of_product}  </td>
                    <td>{val.product_id}  </td>
                    <td>{val.purchase_date}  </td>
                    
                    
                  </tr>
              
              )
             })
             }
                </tbody>
              </table>
               
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>

</>

    );

} export default Payment;