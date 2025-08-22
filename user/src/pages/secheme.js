import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../component/searchbar";


function Schemes(){
  const[list, Setlist]=useState([]);

useEffect(()=>{
  // PM Modi Yojana and Agricultural Schemes data
  const pmModiSchemes = [
    {
      _id: 1,
      post_title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      post_decrisption: "PM-KISAN is a Central Sector Scheme launched by the Government of India to provide income support to all landholding farmers' families across the country. Under the scheme, financial assistance of Rs. 6,000 per year is provided to eligible farmers in three equal installments of Rs. 2,000 each every four months. The scheme aims to supplement the financial needs of farmers in procuring various inputs to ensure proper crop health and appropriate yields. It covers all landholding farmers irrespective of the size of their land holdings.",
      post_file: "pm-kisan.jpg",
      scheme_type: "Financial Support"
    },
    {
      _id: 2,
      post_title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      post_decrisption: "PMFBY is a crop insurance scheme that provides financial support to farmers suffering crop loss/damage arising out of unforeseen events. The scheme covers all food crops, oilseeds, and annual commercial/horticultural crops. Premium rates are very low - 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial and horticultural crops. The scheme uses technology like satellites and drones for quick settlement of claims. It aims to stabilize the income of farmers and encourage them to adopt innovative practices.",
      post_file: "pmfby.jpg",
      scheme_type: "Insurance"
    },
    {
      _id: 3,
      post_title: "Soil Health Card Scheme",
      post_decrisption: "The Soil Health Card Scheme is a government initiative to issue soil health cards to farmers which will carry crop-wise recommendations of nutrients and fertilizers required for individual farms. The cards help promote soil test based fertilizer application and proper soil health management. Under this scheme, the government aims to issue soil health cards to all farmers every 2 years. The card provides information about 12 parameters including macro nutrients, micro nutrients, physical parameters and indicators of soil health.",
      post_file: "soil-health.jpg",
      scheme_type: "Soil Management"
    },
    {
      _id: 4,
      post_title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
      post_decrisption: "PMKSY is formulated with the vision of extending the coverage of irrigation 'Har Khet ko Pani' and improving water use efficiency 'More Crop per Drop'. The scheme focuses on creating water sources, distribution networks, and promoting micro-irrigation. It includes Accelerated Irrigation Benefits Programme (AIBP), Har Khet Ko Pani, and Per Drop More Crop components. The scheme aims to achieve convergence of investments in irrigation at the field level, expand cultivable area under assured irrigation, improve on-farm water use efficiency, and introduce sustainable water conservation practices.",
      post_file: "pmksy.jpg",
      scheme_type: "Irrigation"
    },
    {
      _id: 5,
      post_title: "National Agriculture Market (eNAM)",
      post_decrisption: "eNAM is a pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities. The scheme aims to promote uniformity in agriculture marketing by streamlining procedures across the integrated markets, removing information asymmetry between buyers and sellers, and promoting real-time price discovery based on actual demand and supply. It provides better price discovery through transparent auction process and access to a nationwide market with prices commensurate with quality of produce.",
      post_file: "enam.jpg",
      scheme_type: "Market Access"
    },
    {
      _id: 6,
      post_title: "Kisan Credit Card (KCC) Scheme",
      post_decrisption: "KCC scheme provides timely and adequate credit support from the banking system to farmers for their cultivation and other needs in a flexible and cost-effective manner. The scheme covers short-term credit requirements, medium-term credit requirements, and term loans for agriculture and allied activities. It offers simple procedures, built-in cost escalation, and revolving cash credit facility. The scheme has been extended to include fisheries and animal husbandry to provide institutional credit to farmers engaged in these activities.",
      post_file: "kcc.jpg",
      scheme_type: "Credit Support"
    },
    {
      _id: 7,
      post_title: "Paramparagat Krishi Vikas Yojana (PKVY)",
      post_decrisption: "PKVY is an elaborate component of Soil Health Management (SHM) scheme under National Mission for Sustainable Agriculture (NMSA). The scheme aims to promote organic farming through cluster approach and Participatory Guarantee System (PGS) certification. Under the scheme, financial assistance of Rs. 50,000 per hectare for 3 years is provided for organic inputs, certification, marketing support, and value addition. The scheme encourages farmers to adopt organic farming practices and reduce their dependence on chemical fertilizers and pesticides.",
      post_file: "pkvy.jpg",
      scheme_type: "Organic Farming"
    },
    {
      _id: 8,
      post_title: "National Food Security Mission (NFSM)",
      post_decrisption: "NFSM aims to increase production and productivity of rice, wheat, pulses, coarse cereals and commercial crops in a sustainable manner. The mission focuses on increasing area coverage and productivity through improved technologies and better farm management practices. It provides assistance for certified seeds, integrated nutrient management, resource conservation technologies, plant protection measures, and farm mechanization. The scheme also emphasizes capacity building of farmers through Farmer Field Schools (FFS) and other extension activities.",
      post_file: "nfsm.jpg",
      scheme_type: "Food Security"
    }
  ];

  Setlist(pmModiSchemes);
}, [])

    return(
<>



<Searchbar/>
<h1 class="fashion_taital">Schemes  </h1>

{list.map((val)=>{
  return(
    <>
  
<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
         
          <div class="listpostimg">
            <img 
              src={`https://via.placeholder.com/300x200/4CAF50/white?text=${encodeURIComponent(val.post_title.substring(0, 20))}`} 
              alt={val.post_title}
              style={{width: '100%', height: '200px', objectFit: 'cover'}}
            />
          </div> 
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <Link to="/Mainschemes" state={{scsb:val._id}} >
                <h5 class="card-title">{val.post_title}</h5>
                <p class="card-text">{val.post_decrisption.substring(0, 270)}...</p>
                <span class="badge bg-primary">{val.scheme_type}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      </>
  )
})}
</>
    )

}export default Schemes