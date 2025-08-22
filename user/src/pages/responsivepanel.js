import * as React from 'react';

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { slide as Menu } from 'react-burger-menu';
import { useState } from "react";
import './i18';

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { TreeViewComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { Link } from 'react-router-dom';
import './responsive-panel.css';
function ResponsivePanel() {


<>

    
<div class= "mainhead">
      <div class="header_section">
    

                <div class="container">
                    <div class="containt_main">
                    <div class="btnslider">
                   
                    </div> 






                        <div class="main">

                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="Search " />
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



                                    {/* <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Engilsh</option>
                                        <option value="1">हिन्दी</option>
                                        <option value="2">ગુજરાતી</option>

                                    </select> */}



                <select value={lang} onChange={handleChange}>
                     {languages.map(item => {
                     return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
                                </ul>
                            </div>

                            <div class="login_menu">
                                <ul>
                                    <li>
                                        <Link to="/Login"><i class="fa fa-user" aria-hidden="true">Login</i></Link>

                                    </li>
                                   
                                    
                                </ul>
                            </div>
                            <div class="cart">
                                <ul>
                                    <li>
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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
                                <Link to ="/"><li> <h5>{t('Home')}</h5></li></Link>
                                                    <li> <div class="menu" >
                                                        <li><h6>{t('Products & Equipments')}</h6>
                                                            <ul class="sub-menu" aria-controls="collapseExample">
                                                            <Link to ="/Product"><li >{t('Products')} </li></Link>
                                                            <Link to="/Equipment"> <li>{t('Eqipmnents')}</li></Link>
                                                                {/* <li>{t('All items')}</li> */}

                                                            </ul>
                                                        </li>
                                                    </div>
                                                    </li>
                                    <li> <div class="menu">
                                        <li><h6>{t('Schemes & Subsidies')}</h6>
                                            <ul class="sub-menu">
                                            <Link to ="/Sechemes"><li>{t('Schemes')}</li></Link>
                                            <Link to="/Subsidies"> <li>{t('Subsidies')}</li></Link>


                                            </ul>
                                        </li>
                                    </div>
                                    </li>
                                    <li><h5><Link to="/About">{t('About Us')}</Link></h5></li>
                                    <li><h5><Link to="/Contactus">{t('Contact Us')}</Link></h5></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

   

</div>
</>
    
    }

export default ResponsivePanel;