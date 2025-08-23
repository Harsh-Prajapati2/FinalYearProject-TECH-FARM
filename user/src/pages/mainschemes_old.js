import Axios from "axios";
import Searchbar from "../component/searchbar";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../agriculture-theme.css';

function Mainschemes() {
  const [schemeData, setSchemeData] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    // Check if we have scheme data from the navigation state
    if (location.state && location.state.schemeData) {
      setSchemeData(location.state.schemeData);
    } else if (location.state && location.state.scsb) {
      // Fallback to API call for backward compatibility
      const _id = location.state.scsb;
      Axios.get('http://localhost:1137/api/mainpost', {params: {_id: _id}})
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setSchemeData(response.data[0]);
          }
        })
        .catch((error) => {
          console.error('Error fetching scheme data:', error);
        });
    }
  }, [location.state]);
  return (
    <>
      <Searchbar />
      {list.map((val)=>{
      return(


      <div id="main-wrapper">

        <div id="banner">
          <div class="container">
            <div class="row">
              <div class="posttitle">

                {/* <h2>Stem Borer Management in Paddy Farming: Symptoms, Rice Damages, Natural, Organic, Chemical, and Biological Control</h2> */}
                <h2>{val.post_title}</h2>

              </div>
              <div class="col-md-3"></div>
              <div class="col-md-6">
              

                   <img src={"http://localhost:1137/public/"+ val.post_file} alt="" />

              </div>
            </div>
          </div>
        </div>

        <div class="container">


          <div class="row">


            <div id="content" class="8u skel-cell-important">
              <div class="postdata">

                <div class="postcontent">



                  <h3>
                    Post Description</h3>

                  <h6>

                    {val.post_decrisption}
                   

                    <br />
                    <br />

                    {val.post_extradecrisption}
                  
                  </h6>

                  <br/><br/>

                  {/* <h3> How does a stem borer attack a paddy crop?</h3><br /><br /> */}
                  <h3>{val.post_subtitle}</h3><br/>

                  {/* <h6>A stem borer attacks a paddy crop by laying eggs on the upper surface of the leaves of the paddy plant, typically at night. The eggs hatch into larvae after 5-8 days; the newly hatched larvae move downward on the plant surface, and they may get blown off to other plants by hanging down on their silken thread. They then enter the leaf casing or stem and feed on the green tissues for two or three days before boring into the stem, typically at the node region. As they bore into the stem, they are known as stem borers. </h6> */}

                  <h6>{val.post_subdecrisption} </h6>


                  {/* <h3>  Identification of paddy stem borer, pest characters, and damage symptoms ?</h3><br /><br />

                  <h6>The Paddy Stem Borer, also known as the rice stem borer, is a pest that affects rice plants. The adult form of the insect is a brownish-gray moth with a wingspan of about 1.5 inches. The larvae, or caterpillars, are creamy-white with a brown head and can grow up to 20mm long. They bore into the stem of the rice plant and feed on the inner tissues, weakening the stem and reducing the plant’s ability to absorb nutrients and water. </h6><br /><br /> */}


                  {/* <h3>  Why is stem borer a risk to paddy crops?</h3><br /><br />

                  <h6>The stem borer is a risk to paddy crops because it is a type of insect that feeds on the stem of the plant, which can weaken or kill the plant. A stem borer is a dangerous pest that affects crops during the early stages, reducing crop quality and yield by 20-70%. Rice plants are particularly susceptible to this pest from the early stage to flowering.  </h6><br /><br /> */}
                  <h3>Source : </h3>
                   <div className="pdfshow">
                
                    <a href={"http://localhost:1137/public/"+val.postpdffile} target="/">Pdf file for more information &#8594;</a>
                   
                   </div>
                  
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>
      )
    })}
    </>
  )
}

 export default Mainschemes