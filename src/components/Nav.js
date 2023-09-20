import React from "react";
import { Link } from "react-router-dom";
import { AllProducts } from "../context/productsContext";

export const Nav = () => {
  const { cart } = AllProducts();
  const itemCount = cart.length;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={{ borderBottom: "1px solid black" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            {" "}
            <b> Shopify</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active" to="/cart">
                  Cart <span class="badge bg-danger">{itemCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
