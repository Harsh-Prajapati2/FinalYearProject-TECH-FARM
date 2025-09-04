import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import "./css/recipe.css";

function Recipe() {
  const [list, setList] = useState({});
  const location = useLocation();
  const id = location.state.orid;

  useEffect(() => {
    Axios.get("http://localhost:1137/api/recipt", { params: { id: id } }).then(
      (response) => {
        setList(response.data);
      }
    );
  }, [id]);

  const Print = () => {
    window.print();
  };

  return (
    <div className="receipt fade-in">
      <h1 className="receipt-title">Tech-Farm</h1>
      <div className="receipt-card">
        <h3 className="section-title">Receipt Details</h3>

        <div className="receipt-row">
          <span className="label">Receipt No:</span>
          <span className="value">{list._id}</span>
        </div>

        <div className="receipt-row">
          <span className="label">Product Name:</span>
          <span className="value">{list.product_title}</span>
        </div>

        <div className="receipt-row">
          <span className="label">Quantity:</span>
          <span className="value">{list.number_of_products}</span>
        </div>

        <div className="receipt-row">
          <span className="label">Price:</span>
          <span className="value">₹ {list.price_of_product}</span>
        </div>

        <div className="receipt-row">
          <span className="label">Purchase Date:</span>
          <span className="value">{list.purchase_date}</span>
        </div>
      </div>

      <button type="button" onClick={Print} className="print-btn">
        Print
      </button>
    </div>
  );
}

export default Recipe;
