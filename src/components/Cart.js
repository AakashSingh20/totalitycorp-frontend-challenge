import React from "react";
import { AllProducts } from "../context/productsContext";
import { CartItem } from "./CartItem";
import { Summary } from "./Summary";

export const Cart = () => {
  const { cart, clearCart } = AllProducts();

  return (
    <>
      <div className=" mt-2" style={{ marginLeft: "80px", color: "#ef233c" }}>
        <h1>Cart</h1>
      </div>

      {cart.length === 0 || !cart ? (
        <div
          className="container mt-3 mb-5 p-2"
          style={{
            border: "1px solid black",

            overflowY: "auto",
            borderRadius: "10px",
          }}
        >
          <h1 className="text-center my-5">Cart is empty</h1>
        </div>
      ) : (
        <div
          className="container mt-3 mb-5 p-2 "
          style={{
            border: "1px solid black",
            // height: "70vh",
            overflowY: "auto",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex flex-column align-items-center">
            <CartItem />
            <button
              type="button "
              class="btn btn-danger"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
      <Summary />
    </>
  );
};
