import React, { useEffect ,useState} from 'react'
import { Link, Router } from 'react-router-dom'
import Searchbar from './searchbar'

function Header() {


    return (
    
       
        <>
     <div class="searchead"></div>
        <div class="banner_bg_main">
<Searchbar/>
   
       </div>

             {/*   <div class="header_section">
                    <div class="container">
                        <div class="containt_main">





                      
                            <div class="main">

                                <div class="input-group">

                                    <input type="text" class="form-control" placeholder="Search this blog" />
                                    <div class="input-group-append">
                                        <button class="srch" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                             <div class="header_box">

                                <div class="custom_menu">
                                    <ul>



                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Engilsh</option>
                                            <option value="1">हिन्दी</option>
                                            <option value="2">ગુજરાતી</option>
                                           
                                        </select>
                                    </ul>
                                </div>

                                <div class="login_menu">
                                    <ul>
                                        <li>
                                            <Link to="/Login"><i class="fa fa-user" aria-hidden="true">Login</i></Link>

                                        </li>
                                        </ul>
                                        <ul>
                                         <li><a href="#">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                        </li> 
                                        </ul>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="header_section_top">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="custom_menu">
                                    <ul>
                                        <li> <a href="#">Home</a></li>
                                        <li> <div class="menu">
                                            <li><h6>Products & Equipments</h6>
                                                <ul class="sub-menu">
                                                    <li>Products</li>
                                                    <li>Eqipmnents</li>
                                                    <li>All items</li>

                                                </ul>
                                            </li>
                                        </div>
                                        </li>
                                        <li> <div class="menu">
                                            <li><h6>Schemes & Subsidies</h6>
                                                <ul class="sub-menu">
                                                    <li>Schemes</li>
                                                    <li>Subsidies</li>


                                                </ul>
                                            </li>
                                        </div>
                                        </li>
                                        <li><a href="#">About Us</a></li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>*/}
              




            
        </>
    )
}

export default Header