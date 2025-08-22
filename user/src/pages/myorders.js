
import React from "react";
import { useState, useEffect } from "react";

import Axios from "axios";
import Searchbar from "../component/searchbar";
import { Link } from "react-router-dom";

function Myorders() {
    const [list, setlist] = useState([]);
    let user = JSON.parse(localStorage.getItem("mydata"));
const u_email = user.u_email
    useEffect(() => {
        

        Axios.get('http://localhost:1137/api/myorders', {
            params: { u_email: u_email }
        }).then((response) => {
            setlist(response.data);
        })
    }, [])



	return (
		<>
		<Searchbar/>
			<h1> My Orders </h1>
			{list.map((val) => {
				return (

					<>
						<div class="card mb-3">
							<div class="row g-0">
								<div class="col-md-2">

								
								<img  class=" cartimg"src={"http://localhost:1137/public/"+val.post_img} alt="imagepost"/>
								</div>
								<div class="col-md-10">
									<div class="card-body">
									
										<h5 class="card-title">{val.product_title}</h5>
										<div class="order">
											ProductQty:<input type="text" class="mainvalue" id="orgval" value={val.number_of_products } />

											
											Price: <input type="text" class="incrval" id="noofval" value={val.price_of_product}  />
											


											Date of purchase:<input type="text" class="mainvalue" id="productval" value={val.purchase_date}  />

											<Link to="/Recipe" state={{orid:val.product_id}}><button class="deletebtn" id="btnincrement">&#128424; </button></Link>
										</div>
										{/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

									</div>
								</div>
							</div>
						</div>


				   </>
				)

			})}

						
					
					</>
	)	
   
			
		        
            }export default Myorders