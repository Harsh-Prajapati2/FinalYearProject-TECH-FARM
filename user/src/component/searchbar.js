import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { slide as Menu } from 'react-burger-menu';
import Axios from 'axios'
import { useState } from "react";
import './i18';

import Sidebar from "../pages/sidetest";
const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'gu', text: "ગુજરાતી" },
    { value: 'hi', text: "Hindi" },

]


function Searchbar() {
    const { t } = useTranslation();
    const [lang, setLang] = useState('value');
    const [searchword, setsearchword] = useState('');
    const [list, setlist] = useState('');
    let user = JSON.parse(localStorage.getItem('mydata'));

    const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }

    function logout() {
        alert("logout Sucessfully");
        localStorage.clear()
        window.location = "/";

    }
    function login() {
        window.location = "/Login"
    }

    function profile() {
        window.location = "/Profile"
    }


    function postsearch() {

        //              Axios.post("http://localhost:1137/api/findword",{searchword:searchword }).then((response)=>{
        // if(response.data){
        //     // this.state={srch: response.data}

        //     <Link to= "/fff" state={{srch:searchword}}></Link>
        //     // window.location.href = 'http://localhost:3000/fff?srcdata=${srch}';
        //     alert(response.data)
        //    // window.location='/fff' ;

        //     alert(response.data)
        //     setlist(response.data);



        // }

        // else{


        //     alert(response.data.msg);
        //     <h2>Not Found !!!!!</h2>    
        // }

        // })
    }

    return (
        <>

            <div class="mainhead">
                <div class="header_section">


                    <div class="container">
                        <div class="containt_main">
                            <div class="btnslider">

                            </div>






                            <div class="main">

                                <div class="input-group">

                                    <input type="text" class="form-control" placeholder="Search" onChange={(e) => setsearchword(e.target.value)} />


                                    <div class="input-group-append">
                                        <Link to="/fff" state={{ srch: searchword }}>
                                            <button class="srch" type="button" onClick={postsearch}>
                                                <i class="fa fa-search"></i> </button>
                                        </Link> </div>
                                </div>
                            </div>
                            <div class="header_box">

                                {/* <div class="custom_menu">
                                    <ul>



                                        <select class="form-select  form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Engilsh</option>
                                        <option value="1">हिन्दी</option>
                                        <option value="2">ગુજરાતી</option>

                                    </select>



                                        <select value={lang} onChange={handleChange}>
                                            {languages.map(item => {
                                                return (<option key={item.value}
                                                    value={item.value}>{item.text}</option>);
                                            })}
                                        </select>
                                    </ul>
                                </div> */}

                                <div class="login_menu">
                                    <ul>
                                        <li>
                                            {localStorage.getItem("mydata") == null ?
                                                <>

                                                </>
                                                :
                                                <>
                                                    <button class="logoutbtn" onClick={profile} >{user.u_firstname}</button>
                                                </>
                                            }
                                        </li></ul>

                                    <ul>
                                        <li>
                                            {localStorage.getItem("mydata") == null ?
                                                <>
                                                    <button class="logoutbtn" onClick={login}>Login</button>
                                                </>
                                                :
                                                <>




                                                </>
                                            }
                                        </li>
                                    </ul>




                                </div>

                                {localStorage.getItem("mydata") == null ?
                                    <>

                                    </>
                                    :
                                    <>
                                        <div class="cart">
                                            <ul>
                                                <li>
                                                    <Link to="/Cart">
                                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                    </Link>
                                                </li>


                                            </ul>
                                        </div>
                                    </>
                                }


                            </div>
                        </div>
                    </div>
                </div>


                <div id="header" class="container">
                    <div class="row">
                        <div class="col-md-12 margin-top-30">
                            <div id="hornav" class="pull-right visible-lg">
                                <ul class="nav navbar-nav">
                                    <li><Link to="/"> <span>Home</span></Link></li>

                                    <li><span>Products & Equipment</span>
                                        <ul>
                                            <Link to="/Product"><li ><span>Products </span></li></Link>
                                            <Link to="/Equipment"> <li><span>Eqipmnents</span></li></Link>

                                        </ul>
                                    </li>

                                    <li><span>Schemes & Subsidies</span>
                                        <ul>
                                            <Link to="/Sechemes"><li><span>Schemes</span></li></Link>
                                            <Link to="/Subsidies"> <li><span>Subsidies</span></li></Link>
                                        </ul>
                                    </li>
                                    {localStorage.getItem("mydata")== null ?
                                    <>
                             
                                    </>

                                    :
                                    <>
                                    <li><Link to="/Myorders"><span>My Orders</span></Link></li>
                                    </>
                                    }
                                    <li><Link to="/About"><span>About Us</span></Link></li>
                                    <li><Link to="/Contactus"><span>Contact Us</span></Link></li>
                                </ul>				</div>
                        </div>
                        <div class="clear"></div>

                    </div>
                </div>
            </div>

        </>
    )

} export default Searchbar