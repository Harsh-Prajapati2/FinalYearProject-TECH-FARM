import React, { useState, useEffect } from "react";
import Axios from "axios";
import Searchbar from "../component/searchbar";
import { Link, useNavigate } from "react-router-dom";
import "./css/myorder.css";

function Myorders() {
  const [list, setList] = useState([]);
  let user = JSON.parse(localStorage.getItem("mydata")); 
  const navigate = useNavigate();
  const u_email = user?.u_email;

  useEffect(() => {
    if (u_email) {
      Axios.get("http://localhost:1137/api/myorders", {
        params: { u_email: u_email },
      }).then((response) => {
        setList(response.data);
      });
    }
  }, [u_email]);

  const handleProductClick = (productId) => {
    navigate("/Mainpost", { state: { pl: productId } });
  };

  return (
    <>
      <Searchbar />
      <h1 className="orders-title">My Orders</h1>

      <div className="orders-container">
        {list.map((val) => (
          <div className="order-card" key={val._id} onClick={() => handleProductClick(val.product_id)} style={{ cursor: 'pointer' }}>
            <div className="order-img">
              <img
                src={`http://localhost:1137/public/${val.post_img}`}
                alt={val.product_title}
              />
            </div>

            <div className="order-details">
              <h3 className="product-title">{val.product_title}</h3>
              <div className="order-info">
                <p>
                  <span>Quantity:</span> {val.number_of_products}
                </p>
                <p>
                  <span>Price:</span> ₹{val.price_of_product}
                </p>
                <p>
                  <span>Purchase Date:</span> {val.purchase_date}
                </p>
              </div>

              <Link to="/Recipe" state={{ orid: val.product_id }} onClick={(e) => e.stopPropagation()}>
                <button className="invoice-btn">View Invoice</button>
              </Link>
              
              <button 
                className="view-product-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick(val.product_id);
                }}
              >
                View Product Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Myorders;
