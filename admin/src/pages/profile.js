import React, {useEffect, useState} from "react";
import {link} from 'react-router-dom';
import Axios from 'axios';
function Profile(){
    return (
      <>
        <div className="aboutmain">
          <div className="card box_main">
            <h5 className="card-title">Profile Details</h5>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 member-desc">admin</div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Date of birth</h6>
              </div>
              <div className="col-sm-9 member-desc">03/11/2001</div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 member-desc">admin1@.com</div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 member-desc">1111111</div>
            </div>
          </div>

          {/* Team Section Example for Admin Panel */}
          <div className="fashion_section">
            <div className="container">
              <div className="col-md-12">
                <h5 className="card-title">ADMIN TEAM</h5>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="box_main">
                      <div className="aboutimg">
                        <img
                          src="/resources/images/aboutus/safwanpatel.jpg"
                          className="storyimg"
                          alt="Safwan Patel"
                        />
                      </div>
                      <h3>Safwan Patel</h3>
                      <h6>Admin</h6>
                      <p className="member-desc">
                        Full-stack developer and admin panel manager.
                      </p>
                    </div>
                  </div>
                  {/* Add more admin members here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    }
    export default Profile;