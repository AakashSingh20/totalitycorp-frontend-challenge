import React from "react";

export const Footer = () => {
  return (
    <>
      <footer
        className=" text-center text-lg-start "
        style={{
          //   height: "200px",
          border: "1px solid black",
          backgroundColor: "#edf2f4",
        }}
      >
        <div className=" d-flex align-items-center justify-content-center p-4">
          <h1>Shopify</h1>
        </div>

        <div
          className="text-center p-3 "
          style={{ backgroundColor: "#e5e5e5" }}
        >
          © 2023 Copyright: Shopify
        </div>
      </footer>
    </>
  );
};
