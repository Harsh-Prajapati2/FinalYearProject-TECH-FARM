

import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'

import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";

function Showreview() {
  const location = useLocation();
  const _id = location.state.prid;
  const [list, Setlist] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:1137/api/showreview', {
      params:
        { _id: _id }
    }).then((response) => {
      Setlist(response.data);

    })
  }, [])




  //   firstName,
  //   lastName,
  //   profilePic,
  //   stars,
  //   comment,
  //   timestamp,
  // }: {
  //   firstName: string;
  //   lastName: string;
  //   profilePic: string;
  //   stars: number;
  //   comment: string;
  //   timestamp: number;
  // }) {
  return (
    <>
    <div className="review">
<h4>Product Reviews</h4>
      {list.map((val) =>{
   return (
        <>
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-1">
         
          <div class="reviewimg">  <img src="/resource/images/profile.png" alt="Profile" class="reviewimg" /></div> 
          </div>
          <div class="col-md-3">
         
         <div class="listpostimg">{val.u_firstname}</div> 
         </div>
          <div class="col-md-6">
          <h5 class="card-title">{val.reviews}</h5>

</div>
             <div class="col-md-2">
              <p class="card-text"> {val.upload_date}  </p>
</div>
              {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
          
            
          </div>
        </div>
     

        </>
      );}
      )
      }
      </div>
      </>
      )}
      

export default Showreview;