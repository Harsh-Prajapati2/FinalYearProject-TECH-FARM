import React, {useEffect, useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import Searchbar from "../component/searchbar";
import Axios from 'axios'
import Addreview from "./addreview";
import Showreview from "./showreview";
function Mainproduct() {
   
    const [list,Setlist]=useState([]);
    const [initval,orignalpriceproduct]=useState();
	const [num , setnum]= useState("1");
	const [currentval,setmainnum]=useState();
    const [post_title,setprdname]=useState();
    const [post_file, setprdfile]=useState();
    const location= useLocation();
    const _id=location.state.prid;
  
   




    useEffect(() => {
      
        Axios.get('http://localhost:1137/api/mainpost',{params:{_id:_id}}).then((response)=>{

        orignalpriceproduct(response.data[0].post_price);
        setmainnum(response.data[0].post_price);
            Setlist(response.data)
            setprdname(response.data[0].post_title)
            setprdfile(response.data[0].post_file)
            

        })
       }, []);


	const handlechange=(e)=>{
      setnum(e.target.value)
	}

	const mainpriceproduct=(e)=>{
           setmainnum(e.target.value)
	}




    const incrnum=()=>{
		if(num<10 ){
			var b=Number(num)+1;
            var c =Number(initval);
			const currentval=b * c;
		
			
			 
			 setnum(Number(num)+1);
			 setmainnum(Number(currentval));
		}
		
	}
	const decrnum=()=>{
       if(num>1){
		// var b=Number(num)-1;
		// var c =Number(initval);
		// var d =Number(currentval)-0;
		let a =currentval -initval;

		 setnum(Number(num)-1);
		  setmainnum(Number(a));
	   }
      
	}
    function loginbuy(){
        
        window.location="/Login";
  }
  function addtocart(){
   
    let user = JSON.parse(localStorage.getItem('mydata'));

    const u_email = user.u_email;

   
 

   Axios.post('http://localhost:1137/api/addtocart',{_id:_id,initval:initval,num:num,u_email:u_email,currentval:currentval, post_title:post_title,post_file:post_file}).then((response)=>{
    if(response.data.msg) {
        alert(response.data.msg);
        
      }
      else {
        alert("Cart Added Sucessfully");
        window.location="/Product"
  
    Setlist(response.data)}
   })

   }




    return (
        <>


 <Searchbar/>
              { list.map((val)=>{
                
                return(

            
            <div id="main-wrapper">

                <div id="banner">
                    <div class="container">
                        <div class="row">
                            <div class="posttitle">

                                
                                 <h2>{val.post_title}</h2>

                            </div>
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                {/* <div class="posimg"> <img class="card-img-top" src="/resource/images/products/Roundup_1800x1800.jpg" alt="imagepost" /></div> */}

                                <div class="posimg"> <img class="card-img-top" src={"http://localhost:1137/public/"+val.post_file} alt="imagepost" /></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">


                    <div class="row">


                        <div id="content" class="8u skel-cell-important">
                            <div class="productdata">

                                <div class="productprice">
                            
                                     <h3>Product Price :₹{val.post_price}</h3>
                                    {/* <h3> ₹180</h3> */}
                                </div>
                                <br />
                              
                                    <h6>{val.post_decrisption}</h6>

                                    <br/>
                                    <h6>{val.post_extradecrisption}</h6>
                           

                                    <br />

                                    <br />
                                  
{/* <h6>{list.post_decription}</h6> */}
{/* <h6>{list.post_subdecription}</h6> */}



                                <div class="row">

<div class ="counterupdater">
Price:<input type="text" class="mainvalue" id="orgval" readOnly value={initval} onChange={orignalpriceproduct} />	

<button class="decrementbtn" id ="btndecrement"onClick={decrnum} >-</button>
<input type="text" class="incrval" id="noofval"  readOnly  value={num} onChange={handlechange} />
<button class="incrementbtn" id ="btnincrement"  onClick={incrnum} >+</button>

Total Price:<input type="text" class="mainvalue" id="productval" readOnly value={currentval} onChange={mainpriceproduct} />



</div>
</div>


          {localStorage.getItem("mydata") == null ? //condition check

           <> 
                              {/* jo condition true hoy to */}
                                <button class="buynow" onClick={loginbuy}><i class="fa fa-bolt"></i> Login To Buy </button>
         </>
         :
         <> 
                                 {/* jo condition false hoy to */}
                            
          <Link to="/Reg" state={{pridval: val._id, currentval:currentval, num:num,titl:val.post_title, pht:val.post_file}}>
                                 
                                <button class="buynow" ><span> Buy Now <i class="fa fa-bolt"></i> </span></button>
</Link>
<button class="addtocart" id ="btnincrement"  onClick={addtocart} >Add to Cart</button>
         </>
                            }

                            </div>
                        </div>
                    </div>



                </div>

            </div>

            )
               })}
               <Showreview/>
{ localStorage.getItem("mydata")== null ? 
 <>
 </>
 :
 <>
 <Addreview/>
 </>
 }



        </>

    )
}

export default Mainproduct