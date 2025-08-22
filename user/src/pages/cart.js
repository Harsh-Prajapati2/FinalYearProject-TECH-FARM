import { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Searchbar from "../component/searchbar";

function Cart() {
	let user = JSON.parse(localStorage.getItem('mydata'))
	const [productinitval, orignalpriceproduct] = useState("");
	const [productqty, setnum] = useState();
	const [productcurentval, setmainnum] = useState();
	const [list, Setlist] = useState([]);
	const[product_id,setprdid] =useState();
	 
	const id = user._id;
	const u_email = user.u_email;




	useEffect(() => {
		Axios.get('http://localhost:1137/api/cartlist', {  params: { u_email: u_email } }).then((response) => {
			 Setlist(response.data)
			// orignalpriceproduct(response.data[0].productinitval);
			// setnum(response.data[0].productqty);
			// setmainnum(response.data[0].productcurentval);
             setprdid(response.data[0].product_id)
			
		})
	}, []);




	const handlechange = (e) => {
		setnum(e.target.value)
	}

	const mainpriceproduct = (e) => {
		setmainnum(e.target.value)
	}

	const incrnum = (val) => {
		alert(val.productqty)
		alert(val.productcurentval)
		if (productqty < 10) {
			var b = Number(productqty) + 1;
			var c = Number(productinitval);
			const productcurentval = b * c;



			setnum(Number(productqty) + 1);
			setmainnum(Number(productcurentval));
		}

	}
	const decrnum = () => {
		if (productqty > 1) {
			var b = Number(productqty) - 1;
			var c = Number(productinitval);
			var d = Number(productcurentval) - 0;
			let a = productcurentval - productinitval;
			setnum(Number(productqty) - 1);
			setmainnum(Number(a));
		}
	}


	const Removecart = () => {

		alert(product_id)
		Axios.post("http://localhost:1137/api/removecart", { product_id: product_id }).then((response) => {
			alert("Sucess")
			window.location="/Cart"
			Setlist(response.data)
			
		})

	}

	const Savecart = (product_id) => {
		const location=useLocation();
		const _id =location.state.pl;
		Axios.post("http://localchost:1137/api/savecart", { u_email: u_email, productcurentval: productcurentval, productqty: productqty, productinitval: productinitval, _id:_id }).then((response) => {
			Setlist(response.data)
		})

	}


	return (
		<>
		<Searchbar/>
			<h1>Cart</h1>
			{list.map((val) => {
				return (

					<>
						<div class="card mb-3">
							<div class="row g-0">
								<div class="col-md-2">

								
								<img  class=" cartimg"src={"http://localhost:1137/public/"+val.post_file} alt="imagepost"/>
								</div>
								<div class="col-md-10">
									<div class="card-body">
									
										<h5 class="card-title">{val.post_title}</h5>
										<div class="counterupdater">
											Price:<input type="text" class="mainvalue" id="orgval" value={val.productinitval } onChange={orignalpriceproduct} />

											<button class="decrementbtn" id="btndecrement" onClick={decrnum} >-</button>
											<input type="text" class="incrval" id="noofval" value={val.productqty} onChange={handlechange} />
											<button class="incrementbtn" id="btnincrement" onClick={()=>{
												// val.productqty= val.productqty+ productqty
												// alert(val.productqty	)
												// var ff =val.productcurentval *val.productqty

											}} >+</button>


											Total Price:<input type="text" class="mainvalue" id="productval" value={val.productcurentval} onChange={mainpriceproduct} />

											<button class="deletebtn" id="btnincrement" value={val.product_id} state={{di:val._id}} onClick={Removecart} > Remove</button>
											<button class="savelaterbtn" id="btnincrement" value={val.product_id} state={{di:val._id}} onClick={Savecart} > Save For Later</button>

										</div>
										{/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

									</div>
								</div>
							</div>
						</div>


				   </>
				)

			})}

						<div class="hr">
							<div class="checkout">
								<div class="total">
									<div>
										<div class="Subtotal">Sub-Total</div>
										<div class="items">item</div>
									</div>
									<div class="total-amount">Total </div>
								</div>
								<button class="button">Checkout</button>
							</div>
						</div>
					</>
	)	
   
			
		
	
}

export default Cart