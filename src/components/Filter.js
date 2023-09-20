import React, { useState } from "react";
import { AllProducts } from "../context/productsContext";

export const Filter = () => {
  const { products, filterCategory, filterPrice } = AllProducts();
  const [button, setbutton] = useState(null);
  const uniqueCategory = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  return (
    <>
      <h5>Category</h5>
      {uniqueCategory.map((item, num) => {
        return (
          <div className="my-1" key={num}>
            <button
              type="button"
              className={button === num ? "btn btn-primary" : "btn btn-light"}
              onClick={() => {
                filterCategory(item);
                setbutton(num);
              }}
            >
              {item}
            </button>
          </div>
        );
      })}
      <h5 className="my-4">Price</h5>
      <div className="row " style={{ width: "150px" }}>
        <button
          type="button"
          className={
            button === "91" ? "btn btn-primary my-1" : "btn btn-light my-1"
          }
          onClick={() => {
            filterPrice(1);
            setbutton("91");
          }}
        >
          &#x20B9; 0-3,000
        </button>
        <button
          type="button"
          className={
            button === "92" ? "btn btn-primary my-1" : "btn btn-light my-1"
          }
          onClick={() => {
            filterPrice(2);
            setbutton("92");
          }}
        >
          &#x20B9; 3,000-11,000
        </button>
        <button
          type="button"
          className={
            button === "93" ? "btn btn-primary my-1" : "btn btn-light my-1"
          }
          onClick={() => {
            filterPrice(3);
            setbutton("93");
          }}
        >
          &#x20B9; 11,000-40,000
        </button>
      </div>
    </>
  );
};

// import React, { useState } from "react";

// const ProductPage = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const handleButtonClick = (buttonIndex) => {
//     setSelectedButton(buttonIndex);
//   };

//   const buttonColors = [
//     "#007BFF", // Blue
//     "#28A745", // Green
//     "#FFC107", // Yellow
//     "#DC3545", // Red
//     "#17A2B8", // Teal
//   ];

//   const renderButtons = () => {
//     return buttonColors.map((color, index) => (
//       <button
//         key={index}
//         className="btn m-2"
//         style={{
//           backgroundColor: selectedButton === index ? color : "#DEE2E6",
//         }}
//         onClick={() => handleButtonClick(index)}
//       >
//         Button {index + 1}
//       </button>
//     ));
//   };

//   return (
//     <div className="container mt-5">
//       <div className="text-center">{renderButtons()}</div>
//     </div>
//   );
// };

// export default ProductPage;
