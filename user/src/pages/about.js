import React from 'react'
import Searchbar from '../component/searchbar'
function About() {
  function insta()
{

}

  return (
    <>
    <Searchbar/>
    <div class="aboutmain">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="resource/images/aboutus/AdobeStock_359664176_Preview.jpeg" class="storyimg" alt="hh" />
            </div>
            <div class="col-md-6">
              <div class="aboutbody">
                <h5 class="card-title">The Mission & Story Behind Grow  Smart</h5>
                <br/>
                <br/>
                <p class="abouttext "> We belong to the farmer family, and they do not have proper knowledge about farming and the latest products and equipment using which they improve the quality of grains and make more money. They also sell the products and equipment at a genuine price, and normal people who are interested in planting are not sure which fertiliser is suitable for them; we provide proper guidance to them. and not everyone understands English, so we provide multilingual support, and other websites do not provide proper guidance on government schemes and subsidies; we help them so they can access it.
                </p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>



        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-12">
              <h5 class="card-title">ABOUT US</h5>
              <h6 class="abouttitle">Our mission is every pepole have propper knowledge about Farming </h6>
              <p class="abouttext">The new Crop Insurance Scheme is in line with One Nation – One Scheme theme.  It incorporates the best features of all previous schemes and at the same time, all previous shortcomings / weaknesses have been removed. The PMFBY will replace the existing two schemes National Agricultural Insurance Scheme as well as the Modified NAIS.</p>
            </div>




           
          </div>
        </div>

        <div class="fashion_section">

<div class="container">

<div class="col-md-12">
              <h5 class="card-title">OUR TEAM </h5>
    <div class="row">
    
      <div class="col-lg-6 col-sm-4">
    
        <div class="box_main">

          <div class="aboutimg"><img src="resource/images/aboutus/birju.jpg" class="storyimg" alt="hh" /></div>
          <h3>Brijesh Vasava</h3>
          <h6>Web Devloper</h6>
          <div class="btn_main">



          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-4">
        <div class="box_main">

          <div class="aboutimg"><img src="resource/images/aboutus/my-passport-photo.jpg" class="storyimg" alt="hh" /></div>
          <h3>Amin Varun</h3>
          <h6>Web Devloper</h6>


        </div>
      </div>

    </div>
  </div>

</div>
</div>
</div>


        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
          
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Follow Us on Instagram <i class="fa fa-instagram" aria-hidden="true"></i>
</h5>

              <p class="card-text"> in our page we provides information of our website contents</p>
              <a href={'https://www.instagram.com/accounts/login/'}>
              <button onClick={insta} class="btninsta">Follow Us<span>&#8594;</span> </button></a>
              {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          </div>
      </div>




    </>
  )
}

export default About