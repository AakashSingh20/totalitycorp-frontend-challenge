import React from "react";
import shopimage from "./img/shopping.jpg";

export const Home = () => {
  return (
    <>
      <div
        className="container-fluid row mt-5 mb-5 "
        style={{ height: "60vh" }}
      >
        <div className="col-sm-6 text-center d-flex flex-column align-items-center justify-content-center">
          <div className="container">
            <img
              src={shopimage}
              alt="shop"
              style={{
                width: "80%",
                borderRadius: "50px",
                border: "1px solid red",
              }}
            />
          </div>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-center justify-content-center">
          <h1>Welcome to the store</h1>
          <div className="container w-75 text-justify">
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aperiam, cumque dolorem nesciunt minima laudantium rerum eum totam
              et, illum consequuntur, necessitatibus dicta veritatis quos nihil
              quasi unde porro iste?
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
