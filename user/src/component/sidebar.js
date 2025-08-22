import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <Menu>

      <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            <Link to="/">
              <i class="bi bi-grid"></i>
              <span>Grow Smart</span>

            </Link>
          </li>


          <li class="nav-item">

            <Link to="/Agriculture">
              <a class="nav-link collapsed">


                <span>Agriculture</span>

              </a>
            </Link>
          </li>


          <li class="nav-item">

            <Link to="/Fruit">
              <a class="nav-link collapsed">


                <span>  Fruit</span>

              </a>
            </Link>
          </li>


          <li class="nav-item">

            <Link to="/Vagetable">
              <a class="nav-link collapsed">


                <span>  Vegetable</span>

              </a>
            </Link>
          </li>



          <li class="nav-item">

            <Link to="/Gardaning">
              <a class="nav-link collapsed">


                <span>  Gardaning</span>

              </a>
            </Link>
          </li>

          <li class="nav-item">

            <Link to="/Fertilizer">
              <a class="nav-link collapsed">


                <span>Fertilizers</span>

              </a>
            </Link>
          </li>



          <li class="nav-item">

            <Link to="/Diseasecontrolandmanagement">
              <a class="nav-link collapsed">


                <span>  DiseaseControl & Management</span>

              </a>
            </Link>
          </li>



        </ul>

      </aside>
    </Menu>
  );
} export default Sidebar