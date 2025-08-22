import React, {useEffect, useState} from "react";
import {link} from 'react-router-dom';
import Axios from 'axios';
function Profile(){
    return(
        <>
      <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="main-body">
                        <div class="page-wrapper">
                           <div class="page-header">
                                <div class="page-block">
                                    <div class="row align-items-center">
                                        <div class="col-md-12">
                                            
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
      
                    <div class="row">
                      <div class="col-sm-12">
                       <div class="card">
                        <div class="card-body">
                         <div class="row">
                          <div class="col-md-6">
                
                <ul class="nav nav-tabs nav-tabs-bordered">
  
                  <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                  </li>
  
                  {/* <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                  </li>
  
                  <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                  </li> */}
  
                </ul>
                <div class="tab-content pt-2">
  
                  <div class="tab-pane fade show active profile-overview" id="profile-overview">
                    
                    <h5 class="card-title">Profile Details</h5>
                    <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     admin
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Date of birth</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      03/11/2001
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    admin1@.com
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    1111111
                    </div>
                  </div>
                  
                 
                    
                  </div>
                
  



                  {/* <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
                       <div class="row mb-3">
                        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Name :</label>
                        <div class="col-md-8 col-lg-9">
                          <input type="text" class="form-control" placeholder="Enter your Name" />
                        </div>
                      </div>
  
                      <div class="row mb-3">
                        <label for="Country" class="col-md-4 col-lg-3 col-form-label">Date of birth :</label>
                        <div class="col-md-8 col-lg-9">
                          <input type="date" class="form-control" />
                        </div>
                      </div>             
  
                      <div class="row mb-3">
                        <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone :</label>
                        <div class="col-md-8 col-lg-9">
                          <input type="text" class="form-control"minlength="10" maxlength="10" placeholder="Enter your Phone Number"/>
                        </div>
                      </div>
  
                      <div class="row mb-3">
                        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email :</label>
                        <div class="col-md-8 col-lg-9">
                          <input type="email" class="form-control" placeholder="Enter your Email" />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Verify Password :</label>
                        <div class="col-md-8 col-lg-9">
                          <input type="password" class="form-control" placeholder="Enter your current password" />
                        </div>
                      </div>
                      
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary"  >Save Changes</button>
                      </div>
                  </div> */}
  
  
                  {/* <div class="tab-pane fade pt-3" id="profile-change-password">
                      <div class="row mb-3">
                        <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                        <div class="col-md-8 col-lg-9">
                          <input name="password1" type="password" class="form-control" id="currentPassword" />
                        </div>
                      </div>
                      
                      <div class="row mb-3">
                        <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                        <div class="col-md-8 col-lg-9">
                          <input name="newpassword" type="password" class="form-control" id="newPassword" />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New  Password</label>
                        <div class="col-md-8 col-lg-9">
                          <input name="renewpassword" type="password" class="form-control" id="newPassword" />
                        </div>
                      </div>
  
                      <div class="text-center">
                        <button type="button" class="btn btn-primary"  >Change Password</button>
                      </div>
                  </div> */}
  

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
      </div>
     </div>
    </div>
   </>
);
}
export default Profile;