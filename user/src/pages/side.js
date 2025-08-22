import React from 'react'
import { Link } from 'react-router-dom'
function Side() {
    return (
        <>
        <div id="header" class="container">
        <div class="row">
            <div class="col-md-12 margin-top-30">
                <div id="hornav" class="pull-right visible-lg">
                    <ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        
                        <li><span>Products & Equipment</span>
                            <ul>
                                <li><a href="pages-about-us.html">Products</a></li>
                                <li><a href="pages-services.html">Equipment</a></li>
                               
                            </ul>
                        </li>

                        <li><span>Schemes & Subsidies</span>
                        <ul>
                                    <Link to ="/Sechemes"><li>('Schemes')</li></Link>
                                            <Link to="/Subsidies"> <li>Subsidies</li></Link>
                                    </ul>
                        </li>


                        <li><a href="contact.html">About us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>				</div>
            </div>
            <div class="clear"></div>

            </div>
            </div>
        
        </>
  )
}

export default Side