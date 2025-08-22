import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
      <>
    
    <header class="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
	<img src="./resources/assets/images/logo1.png" alt="" class="logo-short-images"></img>
		<div class="m-header">
			<a class="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
			<a href="/" >
				
				
			</a>
		</div>
		<a class="mobile-menu" id="mobile-header" href="#!">
		
			<i class="feather icon-more-horizontal"></i>
			
		</a>


			<nav id="navbar" class="navbar order-last order-lg-0">
				
				<a href="/Payment" class="nav-link scrollto" ><h7>Payment</h7></a>
				
			</nav>

		<div class="collapse navbar-collapse">
			<a href="#!" class="mob-toggler"></a>
			
			<ul class="navbar-nav ml-auto">
				
				<li>
					<div class="dropdown drp-user">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="icon feather icon-settings"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-right profile-notification">
							<div class="pro-head"> 
								
								<span >Admin</span>
								
								<a href={"http://localhost:3000"} class="dud-logout" title="Logout" onClick={()=>{
									localStorage.clear()
								}}> 
									<i class="feather icon-log-out"></i>
								</a>
							</div>
							<ul class="pro-body">
								<li><a href="/Profile" class="dropdown-item"><i class="feather icon-user"></i> Profile</a></li>
								<li><a href="/Support" class="dropdown-item"><i class="feather icon-settings"></i>Support</a></li>
								
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</header>

    </>
  );

}export default Header;