import React, { useEffect, useState } from "react";
import Axios from 'axios';
// import { link } from "react-router-dom";


function  Support() {

  const [list, setlist] = useState([]);
  
  useEffect(() => {
    Axios.get('http://localhost:1137/api/support_fetch',
      {
       
        
      }).then((response) => {
         setlist(response.data);
      });
          
  },[]);
   
  const postdelete = (id) => {
    alert("Deleted!!!!");
    window.location = "/Support"   
    Axios.post('http://localhost:1137/api/delete_button_support',
    {
      id:id
      
      }).then((response) => {
        window.location = "/Support"      
        alert("done");
  });
}
  

return (
  <>

    <main id="main" class="main">
      <section class="section">
      <div class="row">
                                                 
       
         

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Contact Us</h5>
                


                <table class="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>  
                      <th scope="col">Email</th> 
                      <th scope="col">Phone</th>  
                      <th scope="col">Subject</th>
                      <th scope="col">Message</th> 
                      {/* <th scope="col">Edit Post</th>                             */}
                      <th scope="col">Delete Post</th>
                      
                    </tr>
                  </thead>
                  <tbody>

                    {list.map((val,index) => {

                      return (

                        <tr>
                          <td>{index+1}</td>
                          <td><input type="text" name="sutitle" readOnly value={val.setnamecontact} style={{width:"200px"}}/></td>
                          <td><input type="text" name="sutitle" readOnly value={val.setemailcontact} style={{width:"200px"}}/></td>
                          <td><input type="text" name="sutitle" readOnly value={val.setphonecontact} style={{width:"200px"}}/></td>
                          <td><textarea rows="7" readOnly style={{width:"300px"}}>{val.setsubjectcontact}</textarea></td>
                          <td><textarea rows="7" readOnly style={{width:"300px"}}>{val.setmessagecontact}</textarea></td>                          
                          
                          {/* <td>
                          <button type="button" class="btn btn-outline-secondary"   data-target="#myModal" data-toggle="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                             <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                             <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                            </svg>
                          </button>
                            </td> */}

                          <td>
                          <button type="button" class="btn btn-outline-secondary" onClick={(e)=>postdelete(val._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                          </svg>
                          </button>
                          </td>
                        </tr>
                      )
                    })
                    }


                  </tbody>
                </table>

              </div>
            </div>

         
        </div>
      
        
      </section>

    </main>

  </>


);

} export default Support;