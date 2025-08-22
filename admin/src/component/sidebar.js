import React from "react";


function Sidebar() {
  return (
    <>
	
<nav class="pcoded-navbar menupos-fixed menu-light brand-blue ">
		<div class="navbar-wrapper ">
			<div class="navbar-brand header-logo">
				<a href="/" class="b-brand">
				
				    <img src="./resources/assets/images/logo.png" alt="" class="logo-images"></img>
					
					
				</a>
				<a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
				
			</div>
			<div class="navbar-content scroll-div">
				<ul class="nav pcoded-inner-navbar">


					<br/>
								


 
					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i></span>
						<span class="pcoded-mtext"> Agriculture</span></a>
						<ul class="pcoded-submenu">
						<li class="11"><a href="/Agriculture" class="">Upload Agriculture</a></li>
						<li class="11"><a href="/Manage_agriculture" class="">Manage Agriculture</a></li>
						</ul>
					</li>



					
					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Fruit</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Fruit" class="">Upload Fruit</a></li>
							<li class=""><a href="/Manage_fruit" class="">Manage Fruit</a></li>
						</ul>
					</li>





					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Vegetable</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Vegetable" class="">Upload Vegetable</a></li>
							<li class=""><a href="/Manage_vegetable" class="">Manage Vegetable</a></li>
						</ul>
					</li>

					
					

	                <li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Gardening</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Gardening" class="">Upload Gardening</a></li>
							<li class=""><a href="/Manage_gardening" class="">Manage Gardening</a></li>
						</ul>
					</li>				
					



					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Fertilizer</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Fertilizer" class="">Upload Fertilizer</a></li>
							<li class=""><a href="/Manage_fertilizer" class="">Manage Fertilizer</a></li>
						</ul>
					</li>




					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Disease & Management</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Disease" class="">Upload Disease &<br/> Management</a></li>
							<li class=""><a href="/Manage_disease" class="">Manage Disease & Management</a></li>
						</ul>
					</li>




					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Product</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Product" class="">Upload Product</a></li>
							<li class=""><a href="/Manage_product" class="">Manage Product</a></li>
						</ul>
					</li>




					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Equipment</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Equipment" class="">Upload Equipment</a></li>
							<li class=""><a href="/Manage_equipment" class="">Manage Equipment</a></li>
						</ul>
					</li>




					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Scheme</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Scheme" class="">Upload Scheme</a></li>
							<li class=""><a href="/Manage_scheme" class="">Manage Scheme</a></li>
						</ul>
					</li>




					<li class="nav-item pcoded-hasmenu">
						<a href="#!"><span class="pcoded-micon"><i class="feather icon-box"></i>
						</span><span class="pcoded-mtext"> Subside</span></a>
						<ul class="pcoded-submenu">
						    <li class=""><a href="/Subside" class="">Upload Subside</a></li>
							<li class=""><a href="/Manage_subside" class="">Manage Subside</a></li>
						</ul>
					</li>

					
				
				</ul>
				
			</div>
		</div>
	</nav>

    </>
  );

}export default Sidebar;