import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Searchbar from '../component/searchbar'
import '../agriculture-theme.css';

function Subsidies() { 
  const[list, Setlist]=useState([]);

  useEffect(()=>{
    // Agricultural Subsidies and Support Schemes data
    const agriculturalSubsidies = [
      {
        _id: 1,
        post_title: "Fertilizer Subsidy Scheme",
        post_decrisption: "The Government of India provides subsidies on fertilizers to ensure their availability to farmers at affordable prices. The subsidy covers nitrogen, phosphatic, and potassic fertilizers. Under this scheme, farmers get fertilizers at below market price, with the difference being paid by the government as subsidy to fertilizer companies. The scheme aims to increase agricultural productivity by making essential nutrients easily accessible to farmers. The subsidy is provided through Direct Benefit Transfer (DBT) system to ensure transparency and reduce leakages.",
        post_file: "fertilizer-subsidy.jpg",
        subsidy_type: "Input Subsidy",
        benefit_amount: "Rs. 70,000 crores annually"
      },
      {
        _id: 2,
        post_title: "Diesel Subsidy for Agriculture",
        post_decrisption: "Many state governments provide diesel subsidies to farmers for agricultural operations including irrigation, threshing, and transportation of agricultural produce. The subsidy is provided to reduce the cost of cultivation and make farming more economically viable. Farmers receive subsidized diesel through registered dealers or direct cash transfers. The scheme covers diesel used for operating pump sets, tractors, and other agricultural machinery. Some states provide up to Rs. 40 per liter subsidy on diesel for agricultural use.",
        post_file: "diesel-subsidy.jpg",
        subsidy_type: "Fuel Subsidy",
        benefit_amount: "Up to Rs. 40 per liter"
      },
      {
        _id: 3,
        post_title: "Power/Electricity Subsidy",
        post_decrisption: "State governments provide free or subsidized electricity to farmers for agricultural purposes, particularly for irrigation. The scheme aims to reduce the cost of farming and encourage adoption of modern irrigation techniques. Many states provide free electricity up to a certain limit, while others offer it at highly subsidized rates. The subsidy covers electricity used for operating pump sets, cold storage, and other agricultural activities. Some states provide 24-hour quality power supply to agriculture at subsidized rates.",
        post_file: "power-subsidy.jpg",
        subsidy_type: "Power Subsidy",
        benefit_amount: "Free or highly subsidized rates"
      },
      {
        _id: 4,
        post_title: "Seed Subsidy Scheme",
        post_decrisption: "The government provides subsidies on certified seeds to promote the use of quality planting material. The scheme covers subsidy on seeds of food grains, oilseeds, pulses, cotton, and other commercial crops. High Yielding Varieties (HYV) and hybrid seeds are provided at subsidized rates to increase productivity. The subsidy ranges from 50% to 75% of the cost of seeds depending on the category of farmers and type of seeds. The scheme also promotes the use of climate-resilient and biofortified varieties.",
        post_file: "seed-subsidy.jpg",
        subsidy_type: "Input Subsidy",
        benefit_amount: "50-75% of seed cost"
      },
      {
        _id: 5,
        post_title: "Farm Machinery Subsidy",
        post_decrisption: "Sub-Mission on Agricultural Mechanization (SMAM) provides subsidies for purchase of agricultural machinery and equipment. The scheme aims to increase the reach of farm mechanization to small and marginal farmers. Subsidies are provided for tractors, harvesters, seeders, planters, and other modern agricultural implements. Individual farmers can get 40-50% subsidy while the rate is higher for women farmers, SC/ST farmers, and farmers in hilly areas. Custom Hiring Centers are also established to provide machinery on rental basis.",
        post_file: "machinery-subsidy.jpg",
        subsidy_type: "Equipment Subsidy",
        benefit_amount: "40-50% of equipment cost"
      },
      {
        _id: 6,
        post_title: "Drip and Sprinkler Irrigation Subsidy",
        post_decrisption: "Under PMKSY-Per Drop More Crop component, subsidies are provided for micro irrigation systems including drip and sprinkler irrigation. The scheme aims to enhance water use efficiency and increase crop productivity. Small and marginal farmers get 55% subsidy while other farmers get 45% subsidy on the cost of micro irrigation systems. The subsidy covers the cost of drip irrigation, sprinkler irrigation, rain gun systems, and other micro irrigation equipment. The scheme promotes water conservation and sustainable agriculture practices.",
        post_file: "drip-irrigation.jpg",
        subsidy_type: "Irrigation Subsidy",
        benefit_amount: "45-55% of system cost"
      },
      {
        _id: 7,
        post_title: "Interest Subsidy on Agricultural Loans",
        post_decrisption: "The government provides interest subsidy on crop loans to make credit affordable for farmers. Under the Interest Subvention Scheme, farmers get loans at 7% interest rate, with additional 3% incentive for prompt repayment, effectively reducing the rate to 4%. The scheme covers short-term crop loans up to Rs. 3 lakh. Banks get interest subvention from the government to compensate for the reduced interest rates. The scheme aims to ensure timely and adequate credit flow to the agriculture sector at affordable rates.",
        post_file: "interest-subsidy.jpg",
        subsidy_type: "Credit Subsidy",
        benefit_amount: "3-4% interest rate reduction"
      },
      {
        _id: 8,
        post_title: "Organic Farming Subsidy",
        post_decrisption: "Under various schemes like PKVY and Mission Organic Value Chain Development, subsidies are provided to promote organic farming. The subsidy covers organic inputs, bio-fertilizers, bio-pesticides, and organic certification costs. Farmers get financial assistance for adopting organic farming practices, setting up vermi-compost units, and obtaining organic certification. The scheme also provides support for marketing of organic produce and value addition. Cluster approach is followed to make organic farming economically viable and sustainable.",
        post_file: "organic-subsidy.jpg",
        subsidy_type: "Input Subsidy",
        benefit_amount: "Rs. 50,000 per hectare over 3 years"
      }
    ];

    Setlist(agriculturalSubsidies);
  }, [])
  
      return(
  <>
  <Searchbar/>
  <div className="agriculture-container">
    <div className="hero-section" style={{
      background: 'linear-gradient(135deg, var(--agriculture-secondary), var(--agriculture-accent))',
      padding: '60px 20px',
      textAlign: 'center',
      color: 'white',
      marginBottom: '40px'
    }}>
      <h1 className="agriculture-title" style={{fontSize: '3rem', marginBottom: '20px'}}>
        Agricultural Subsidies
      </h1>
      <p style={{fontSize: '1.2rem', opacity: '0.9'}}>
        Financial support and incentives to reduce farming costs and boost productivity
      </p>
    </div>

    <div className="subsidies-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '30px',
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {list.map((val)=>{
        return(
          <div key={val._id} className="agriculture-card subsidy-card" style={{
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = 'var(--agriculture-secondary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            
            <Link 
              to="/Mainsubsidies" 
              state={{subsidyData: val}} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="subsidy-image" style={{
                height: '200px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={`https://via.placeholder.com/400x200/2196F3/white?text=${encodeURIComponent(val.post_title.substring(0, 20))}`} 
                  alt={val.post_title}
                  style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'var(--agriculture-secondary)',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  {val.subsidy_type}
                </div>
              </div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  color: 'var(--agriculture-secondary)',
                  marginBottom: '15px',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  lineHeight: '1.4'
                }}>
                  {val.post_title}
                </h3>
                
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '0.95rem'
                }}>
                  {val.post_decrisption.substring(0, 150)}...
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    background: 'var(--agriculture-light)',
                    color: 'var(--agriculture-primary)',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {val.benefit_amount}
                  </span>
                </div>
                
                <div className="agriculture-btn btn-secondary" style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'var(--agriculture-secondary)',
                  color: 'white',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--agriculture-accent)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--agriculture-secondary)';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  View Details →
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  </div>
  </>
      )
  
}

export default Subsidies