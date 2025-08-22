
import React, { useEffect, useState } from "react";
import { Await, link, useParams } from 'react-router-dom';
import Axios from 'axios';


function Profile() {

  
  function logout() {
    alert("logout Sucessfully");
    localStorage.clear()
    window.location = "/";

}


  let user = JSON.parse(localStorage.getItem('mydata'));


  // useEffect(() => {
  //   perfilldata();

  // }, []);

  // const perfilldata = async () => {

  //   let user = JSON.parse(localStorage.getItem('mydata'));
  //   var id = user._id;
  //   let result = await fetch('http://localhost:1137/api/get_info',
  //     {
  //       params: {id: id}
  //     });
  //     result =await result.json();
  //     console.warn(result)

  //    setname(result.name)


  // }
  //  let user5 = JSON.parse(localStorage.getItem('mydata'));


  const [u_password, setpassword1] = useState('');
  const [new_pass, setnewpassword] = useState('');
  const [renew_pass, setrenewpassword] = useState('');
  const u_email = user.u_email;

  const postNewpassword = () => {

        if(new_pass==renew_pass && new_pass!=u_password){

       Axios.post('http://localhost:1137/api/change_password',
       {u_password:u_password,u_email:u_email,new_pass:new_pass})
       .then((response)=>{

        if(response.data.msg){
        alert("wrong password try again !!!");

        }
        else{
          alert("Password Updated");
          window.location="/profile"
        }

       }); 

      }
      else
      {
        alert("Both Password not matched");
      }
  }



  return (
    <>



      <br /><br />
      <section class="section profile">
        <div class="row">
          <div class="col-xl-4">

            <div class="card">
              <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
           
                <img src="/resource/images/profile.png" alt="Profile" class="rounded-circle" />
                <h2>{user.u_firstname}</h2>

                <button class="logoutbtn" onClick={logout} >Logout</button>
              </div>
            </div>

          </div>

          <div class="col-xl-8">

            <div class="card">
              <div class="card-body pt-3">

                <ul class="nav nav-tabs nav-tabs-bordered">

                  <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                  </li>

                  



                  <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                  </li>

                </ul>
                <div class="tab-content pt-2">

                  <div class="tab-pane fade show active profile-overview" id="profile-overview">

                    <h5 class="card-title">Profile Details</h5>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label ">Name</div>
                      <div class="col-lg-9 col-md-8">{user.u_firstname}</div>
                    </div>

                    {/* .substring(0, 2) */}

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Date of birth</div>
                      <div class="col-lg-9 col-md-8">{user.u_dob}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Gender</div>
                      <div class="col-lg-9 col-md-8">{user.u_gender}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Phone</div>
                      <div class="col-lg-9 col-md-8">{user.u_mob}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Email</div>
                      <div class="col-lg-9 col-md-8">{user.u_email}</div>
                    </div>


                  </div>


 



                  <div class="tab-pane fade pt-3" id="profile-change-password">



                    <div class="row mb-3">
                      <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="password1" type="password" class="form-control" id="currentPassword" onChange={(e) => setpassword1(e.target.value)} />
                      </div>
                    </div>


                    <div class="row mb-3">
                      <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" class="form-control" id="newPassword" onChange={(e) => setnewpassword(e.target.value)} />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New  Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" class="form-control" id="newPassword" onChange={(e) => setrenewpassword(e.target.value)} />
                      </div>
                    </div>



                    <div class="text-center">
                      <button type="button" class="btn btn-primary" onClick={postNewpassword}>Change Password</button>
                    </div>


                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>




    </>
  );

}
export default Profile;