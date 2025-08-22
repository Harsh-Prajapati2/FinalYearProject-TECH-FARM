import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Searchbar from '../component/searchbar'

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
  <h1 class="fashion_taital">Subsidies  </h1>

  {list.map((val)=>{
    return(
      <>
        <Link to="/Mainschemes" state={{scsb:val._id}} >
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <div class="listpostimg">
                  <img 
                    src={`https://via.placeholder.com/300x200/2196F3/white?text=${encodeURIComponent(val.post_title.substring(0, 20))}`} 
                    alt={val.post_title}
                    style={{width: '100%', height: '200px', objectFit: 'cover'}}
                  />
                </div> 
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{val.post_title}</h5>
                  <p class="card-text">{val.post_decrisption.substring(0, 270)}...</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-success">{val.subsidy_type}</span>
                    <small class="text-muted">{val.benefit_amount}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
  
        </>
    )
  })}
  </>
      )
  
}

export default Subsidies