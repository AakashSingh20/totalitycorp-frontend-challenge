import React from "react";
import { AllProducts } from "../context/productsContext";

export const Summary = () => {
  const { total, tax, FinalPrice } = AllProducts();

  return (
    <>
      <div className="container">
        <div
          className="col-sm-12 mb-5"
          style={{
            border: "1px solid black",
            borderRadius: "20px",
          }}
        >
          <h3 className="my-2 mx-4">Summary</h3>
          <div className="d-flex">
            <div
              className="col-sm-9"
              style={{
                border: "1px solid black",
                borderRadius: "0px 0px 0px 20px",
              }}
            >
              <div className="d-flex">
                <div className="text-end col-sm-3">
                  <h5 className="mx-4 p-2">Items total:</h5>
                  <h5 className="mx-4 p-2">Shipping:</h5>
                  <h5 className="mx-4 p-2">Tax:</h5>
                </div>
                <div className=" col-sm-3">
                  <h5 className="mx-4 p-2">&#x20B9;{total}</h5>
                  <h5 className="mx-4 p-2">Free</h5>
                  <h5 className="mx-4 p-2">&#x20B9;{tax}</h5>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 d-flex align-items-center"
              style={{
                border: "1px solid black",
                borderRadius: "0px 0px 20px 0px",
              }}
            >
              <h3 className="mx-4 p-3">Total:&#x20B9; {FinalPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
