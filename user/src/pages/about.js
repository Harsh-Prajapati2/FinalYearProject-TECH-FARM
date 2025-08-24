import React from 'react'
import Searchbar from '../component/searchbar'

function About() {
  function insta() {}

  // Function to handle image errors
  const handleImageError = (e, memberName) => {
    console.log(`Image failed to load for ${memberName}:`, e.target.src)
    e.target.style.display = 'none'
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = 'flex'
    }
  }

  return (
    <>
      <Searchbar />
      <div className="aboutmain">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="resource/images/aboutus/AdobeStock_359664176_Preview.jpeg"
                className="storyimg"
                alt="hh"
              />
            </div>
            <div className="col-md-6">
              <div className="aboutbody">
                <h5 className="card-title">The Mission & Story Behind Tech-Farm</h5>
                <br />
                <br />
                <p className="abouttext">
                  {' '}
                  We belong to the farmer family, and they do not have proper
                  knowledge about farming and the latest products and equipment
                  using which they improve the quality of grains and make more
                  money. They also sell the products and equipment at a genuine
                  price, and normal people who are interested in planting are not
                  sure which fertiliser is suitable for them; we provide proper
                  guidance to them. and not everyone understands English, so we
                  provide multilingual support, and other websites do not provide
                  proper guidance on government schemes and subsidies; we help
                  them so they can access it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-12">
              <h5 className="card-title">ABOUT US</h5>
              <h6 className="abouttitle">
                Our mission is every people have proper knowledge about Farming
              </h6>
              <p className="abouttext">
                The new Crop Insurance Scheme is in line with One Nation – One
                Scheme theme. It incorporates the best features of all previous
                schemes and at the same time, all previous shortcomings /
                weaknesses have been removed. The PMFBY will replace the existing
                two schemes National Agricultural Insurance Scheme as well as the
                Modified NAIS.
              </p>
            </div>
          </div>
        </div>

        {/* UPDATED TEAM SECTION WITH 4 MEMBERS */}
        <div className="fashion_section">
          <div className="container">
            <div className="col-md-12">
              <h5 className="card-title">OUR TEAM</h5>
              <div className="row">
                {/* MEMBER 1 - Safwan Patel - UPDATED IMAGE */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="box_main">
                    <div className="aboutimg">
                      <img
                        src="./resource/images/aboutus/jaymin.jpeg"
                        className="storyimg"
                        alt="Safwan Patel"
                        onError={(e) => handleImageError(e, 'Safwan Patel')}
                        onLoad={() => console.log('Safwan image loaded successfully')}
                      />
                      <div
                        className="member-placeholder"
                        style={{
                          height: '200px',
                          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                          display: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '4rem',
                          color: 'white',
                          borderRadius: '10px',
                        }}
                      >
                        👨‍💻
                      </div>
                    </div>
                    <h3>Safwan Patel</h3>
                    <h6>Web Developer</h6>
                    <p className="member-desc">
                      Full-stack developer specializing in modern web technologies
                      and agricultural platform development.
                    </p>
                  </div>
                </div>

                {/* MEMBER 2 - Harsh Prajapati */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="box_main">
                    <div className="aboutimg">
                      <img
                        src="./resource/images/aboutus/jaypadhiyar.jpg"
                        className="storyimg"
                        alt="Harsh Prajapati"
                        onError={(e) => handleImageError(e, 'Harsh Prajapati')}
                        onLoad={() => console.log('Harsh image loaded successfully')}
                      />
                      <div
                        className="member-placeholder"
                        style={{
                          height: '200px',
                          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                          display: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '4rem',
                          color: 'white',
                          borderRadius: '10px',
                        }}
                      >
                        👨‍💻
                      </div>
                    </div>
                    <h3>Harsh Prajapati</h3>
                    <h6>Web Developer</h6>
                    <p className="member-desc">
                      Frontend developer focused on creating user-friendly
                      interfaces and responsive web applications.
                    </p>
                  </div>
                </div>

                {/* MEMBER 3 - Jay Padhiyar - FIXED IMAGE PATH */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="box_main">
                    <div className="aboutimg">
                      <img
                        src="./resource/images/aboutus/jaypadhiyar.jpg"
                        className="storyimg"
                        alt="Jay Padhiyar"
                        onError={(e) => handleImageError(e, 'Jay Padhiyar')}
                        onLoad={() => console.log('Jay image loaded successfully')}
                      />
                      <div
                        className="member-placeholder"
                        style={{
                          height: '200px',
                          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '4rem',
                          color: 'white',
                          borderRadius: '10px',
                        }}
                      >
                        👨‍💻
                      </div>
                    </div>
                    <h3>Jay Padhiyar</h3>
                    <h6>Web Developer</h6>
                    <p className="member-desc">
                      Backend developer specializing in database management and
                      server-side technologies for web applications.
                    </p>
                  </div>
                </div>

                {/* MEMBER 4 - Jaymin Makwana */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="box_main">
                    <div className="aboutimg">
                      <img
                        src="./resource/images/aboutus/jaymin.jpeg"
                        className="storyimg"
                        alt="Jaymin Makwana"
                        onError={(e) => handleImageError(e, 'Jaymin Makwana')}
                        onLoad={() => console.log('Jaymin image loaded successfully')}
                      />
                      <div
                        className="member-placeholder"
                        style={{
                          height: '200px',
                          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '4rem',
                          color: 'white',
                          borderRadius: '10px',
                        }}
                      >
                        👨‍💼
                      </div>
                    </div>
                    <h3>Jaymin Makwana</h3>
                    <h6>Web Developer</h6>
                    <p className="member-desc">
                      Full-stack developer with expertise in modern frameworks and
                      agricultural technology solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Follow Us on Instagram{' '}
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </h5>
                <p className="card-text">
                  In our page we provide information of our website contents
                </p>
                <a href={'https://www.instagram.com/accounts/login/'}>
                  <button onClick={insta} className="btninsta">
                    Follow Us<span>&#8594;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .aboutmain {
          padding: 20px;
          background: #f8f9fa;
        }

        .box_main {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
          height: 100%;
          margin-bottom: 20px;
        }

        .box_main:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #4caf50;
        }

        .aboutimg {
          margin-bottom: 20px;
        }

        .storyimg {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
        }

        .box_main h3 {
          color: #2c3e50;
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .box_main h6 {
          color: #4caf50;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .member-desc {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-top: 10px;
        }

        .card-title {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 20px;
          font-size: 1.8rem;
          text-align: center;
        }

        .abouttext {
          color: #555;
          line-height: 1.6;
          font-size: 1rem;
        }

        .abouttitle {
          color: #4caf50;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .btninsta {
          background: linear-gradient(135deg, #e1306c, #c13584);
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btninsta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(225, 48, 108, 0.3);
        }

        .fashion_section {
          background: #f8f9fa;
          padding: 50px 0;
        }

        .card {
          border: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }

        .aboutbody {
          padding: 40px;
        }

        @media (max-width: 768px) {
          .col-lg-6 {
            margin-bottom: 20px;
          }

          .box_main {
            margin-bottom: 30px;
          }

          .card-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default About
