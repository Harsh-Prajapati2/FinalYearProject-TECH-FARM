import React, { useEffect, useState } from "react";
import Axios from 'axios';
// import { link } from "react-router-dom";


function  Manage_fruit() {

const closemodal=(e) =>{
                           window.location="/Manage_fruit";
    
                         }

const onupdate=(e) =>{

        e.preventDefault();
        const id=document.getElementById('id').value;
        const post_title1=document.getElementById('post_title1').value;
        const post_description1=document.getElementById('post_description1').value;
        const post_description_etc=document.getElementById('post_description_etc').value;
        const post_subtitle1=document.getElementById('post_subtitle1').value;
        const post_subdescription1=document.getElementById('post_subdescription1').value;
        Axios.post('http://localhost:1137/api/updated_fruit',{id:id,post_title1:post_title1,post_description1:post_description1,post_description_etc:post_description_etc,post_subtitle1:post_subtitle1,post_subdescription1:post_subdescription1}).then((response)=>{

        window.location="/Manage_fruit";
        });
      }


const[list, setlist] = useState([]);


useEffect(() => {
    Axios.get('http://localhost:1137/api/fruit_fetch',
      {
        
      }).then((response) => 
      {
         setlist(response.data);
      });
    },[]);


const[rs,setlist1]=useState([]);

const showDetail = (id) =>
        {
          
            
            Axios.post('http://localhost:1137/api/get_fruit_fetch',{id:id}).then((response)=>{

            setlist1(response.data);
          });
        }

  const postdelete = (id) => {
    
    window.location = "/Manage_fruit"  
    Axios.post('http://localhost:1137/api/delete_button',
    {
      id:id
      
      }).then((response) => {
               
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
                <h5 class="card-title">Manage Fruit</h5>
                


                <table class="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>  
                      <th scope="col">Description</th> 
                      <th scope="col">Sub-Title</th>  
                      <th scope="col">Sub-Description</th>
                      <th scope="col">Upload Date</th> 
                      <th scope="col">Edit Post</th>                            
                      <th scope="col">Delete Post</th>
                      
                    </tr>
                  </thead>
                  <tbody>

                    {list.map((val,index) => {

                      return (

                        <tr>
                          <td>{index+1}</td>
                          <td><input type="text" name="sutitle" readOnly value={val.post_title} style={{width:"200px"}}/></td>
                          <td><textarea rows="7" readOnly style={{width:"350px"}}>{val.post_decrisption}</textarea></td>
                          <td><input type="text" name="sutitle" readOnly value={val.post_subtitle} style={{width:"200px"}}/></td>
                          <td><textarea rows="7" readOnly style={{width:"350px"}}>{val.post_subdecrisption}</textarea></td>
                          <td>{val.post_upload_date}</td>
                          <td>
                          <button type="button" class="btn btn-outline-secondary" onClick={()=>showDetail(val._id)}   data-target="#myModal" data-toggle="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                             <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                             <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                            </svg>
                          </button>
                            </td>
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

{/* modal */}
<div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                
                {rs.map((val1) => {

                  return (
                    <>
                    <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Manage Fruit</h4>
                                    
                                    <div class="basic-form">
                                    <input type="text" value={val1._id} id="id" hidden />
                                            
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label>Title:</label>
                                                    <input type="text" defaultValue={val1.post_title} class="form-control" id="post_title1" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label>Description:</label>
                                                    <input type="text" defaultValue={val1.post_decrisption} class="form-control" id="post_description1"  />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Extra-description:</label>
                                                    <input type="text" defaultValue={val1.post_decrisption} class="form-control" id="post_description_etc" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Subtitle:</label>
                                                <input type="text" defaultValue={val1.post_subtitle} class="form-control" id="post_subtitle1" />
                                            </div>
                                            <div class="form-group">
                                                <label>Subdescription:</label>
                                                <input type="text" defaultValue={val1.post_subdecrisption} class="form-control" id="post_subdescription1" />
                                            </div>
                                            <div class="form-group">
                                                <label>Browse Files:</label>
                                                <input type="textarea" defaultValue={val1.post_file} class="form-control" id="post_file1" />
                                            </div>
                                            
                                            <div class="form-group">
                                            </div>
                                            
                                            
                                      
                                    </div>
                                </div>
                            </div>
                    </>
            )})}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closemodal}  >Close</button>
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onupdate}  >Update</button>
            </div>
          </div>

        </div>
      </div>
  </>


);

} export default Manage_fruit;