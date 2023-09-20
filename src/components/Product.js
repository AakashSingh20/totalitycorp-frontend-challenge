import React, { useEffect, useState } from "react";
import { AllProducts } from "../context/productsContext";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { getSingleProduct, addToCart } = AllProducts();
  const [singleData, setsingleData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const data = getSingleProduct(id);
    setsingleData(data);
  }, []);

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <img
              src={singleData.image}
              alt="Product Image"
              style={{
                width: "70%",
                borderRadius: "20px",
              }}
            />
          </div>
          <div className="col-sm-6 d-flex flex-column justify-content-center ">
            <h5>{singleData.name}</h5>
            <p>&#x20B9;{singleData.price / 100}</p>
            <p>{singleData.description}</p>
            <div className="">
              <button className="btn btn-primary" onClick={() => addToCart(id)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
