
import React, { useState } from "react"
function Try() {
	
	const [initval,orignalpriceproduct]=useState("500");
	const [num , setnum]= useState("1");
	const [currentval,setmainnum]=useState(initval);

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
			alert("value is"+currentval);
			
			 
			 setnum(Number(num)+1);
			 setmainnum(Number(currentval));
		}
		
	}
	const decrnum=()=>{
       if(num>1){
		var b=Number(num)-1;
		var c =Number(initval);
		var d =Number(currentval)-0;
		let a =currentval -initval;
	           alert(a);
		
		
		 
		 setnum(Number(num)-1);
		  setmainnum(Number(a));
	   }
	}
	
  return (
	
    <>
  <div class="row">

	<div class ="counterupdater">
	Price:<input type="text" class="mainvalue" id="orgval"  value={initval} onChange={orignalpriceproduct} />	

	<button class="decrementbtn" id ="btndecrement"onClick={decrnum} >-</button>
    <input type="text" class="incrval" id="noofval"  value={num} onChange={handlechange} />
	<button class="incrementbtn" id ="btnincrement"  onClick={incrnum} >+</button>


	Total Price:<input type="text" class="mainvalue" id="productval"  value={currentval} onChange={mainpriceproduct} />


	</div>
  </div>
    </>
  )
} export default Try