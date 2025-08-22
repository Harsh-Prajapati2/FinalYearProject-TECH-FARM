import React from "react";
import Searchbar from "../component/searchbar";
import { useState, useEffect } from "react";
import  Axios  from "axios";
import { Link } from "react-router-dom";
function Equipment(){ const [list, Setlist] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:1137/api/equipment_fetch').then((reponse) => {

      Setlist(reponse.data)
    }, [])
  })
  return (
    <>
      <Searchbar />
      <div class="fashion_section">

        <div class="container">
          <h1 class="fashion_taital"> Equipments </h1>
          <div class="fashion_section_2">
            <div class="row">


              {list.map((val) => {
                return (
                  <>


                    <div class="col-lg-4 col-sm-4">
                      {/* <Link to="/Mainpost" state={{npoid:val._id}}> */}
                      <Link to="/Mainproduct" state={{ prid: val._id }}>
                        <div class="box_main">

                          <img class="card-img-top" src={"http://localhost:1137/public/" + val.post_file} alt="imagepost" />
                          {/* <h4 class="shirt_text"> Stem Borer Management in Paddy Farming: Symptoms, Rice Damages, Natural, Organic, Chemical</h4> */}
                          <h4 class="posttitle_text">{val.post_title}</h4>

                          <p class="card-text"><div class="Danger"> Price: ₹ {val.post_price}</div></p>
                          <div class="btnbuy">
                            <Link to="/Mainproduct" state={{ prid: val._id }}> <button>View Product</button></Link>
                          </div>
                        </div>
                      </Link>
                    </div>

                  </>
                )
              })}

            </div>
          </div>

        </div>
      </div>



    </>
  )

}export default Equipment;