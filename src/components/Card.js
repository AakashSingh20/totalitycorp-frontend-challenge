import React from "react";
import { Link } from "react-router-dom";
import { AllProducts } from "../context/productsContext";

export const Card = ({ name, image, price, id }) => {
  const { addToCart } = AllProducts();
  return (
    <>
      <div className="card" style={{ width: "290px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{name}</h5>
            <h5 style={{ color: "red" }}>&#x20B9;{price}</h5>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Link to={`/product/${id}`} className="btn btn-primary">
              view
            </Link>
            <a className="btn btn-primary" onClick={() => addToCart(id)}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
