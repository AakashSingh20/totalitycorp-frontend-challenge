import React from "react";
import { Filter } from "./Filter";
import { AllProducts } from "../context/productsContext";
import { Card } from "./Card";

export const Products = () => {
  const { filtered } = AllProducts();
  return (
    <>
      <div className=" mt-2" style={{ marginLeft: "40px", color: "#ef233c" }}>
        <h2>Products</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-3 d-flex flex-column align-items-center"
            style={{
              border: "1px solid black",
              height: "85vh",
              padding: "20px",
              overflowY: "auto",
            }}
          >
            <Filter />
          </div>

          <div
            className="col-sm-9"
            style={{
              height: "85vh",
              border: "1px solid black",
              padding: "20px",
            }}
          >
            <div
              className="container"
              style={{
                height: "100%",
                overflowY: "auto",
              }}
            >
              <div className="row">
                {filtered.map((item, num) => {
                  return (
                    <div
                      className="col-md-4 d-flex align-items-center justify-content-center mt-4"
                      key={num}
                    >
                      <Card
                        name={item.name}
                        image={item.image}
                        price={item.price / 100}
                        id={item.id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
