import React from "react";
import { AllProducts } from "../context/productsContext";

export const CartItem = () => {
  const { cart, removeItem, increase, decrease } = AllProducts();
  return (
    <>
      {cart.map((item, num) => {
        return (
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={item.image}
                    class="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                  />
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4">
                  <p class="lead fw-normal mb-2">
                    <h1> {item.name}</h1>
                  </p>
                  <p>
                    <span class="text-muted  ">Company: {item.company} </span>

                    <span class="text-muted mx-4">
                      Category: {item.category}
                    </span>
                  </p>
                </div>
                <div className="col-sm-1">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>
                    <div
                      className="container d-flex justify-content-center align-items-center"
                      style={{ border: "1px solid black" }}
                    >
                      <h5 className="text-center">{item.quantity}</h5>
                    </div>

                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">
                    &#x20B9;{(item.price / 100) * item.quantity}
                  </h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
