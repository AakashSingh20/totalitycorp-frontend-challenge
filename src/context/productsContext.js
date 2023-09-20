import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
const API = require("../API/ProductAPI");

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [cart, setcart] = useState([]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const api = "https://api.pujakaitem.com/api/products";
  // const getProducts = async () => {
  //   await axios.get(api).then((res) => {
  //     setproducts(res.data);
  //     setfiltered(res.data);
  //   });
  // };

  useEffect(() => {
    setproducts(API.Itemdata);
    setfiltered(API.Itemdata);
  }, []);

  const filterCategory = (category) => {
    if (category === "All") {
      setfiltered(products);
      return;
    } else {
      setfiltered(products.filter((item) => item.category === category));
    }
  };

  const filterPrice = (price) => {
    if (price === 1) {
      setfiltered(products.filter((item) => item.price < 300000));
    }
    if (price === 2) {
      setfiltered(
        products.filter((item) => item.price >= 300000 && item.price < 1100000)
      );
    }
    if (price === 3) {
      setfiltered(products.filter((item) => item.price >= 1100000));
    }
  };

  const getSingleProduct = (id) => {
    const singleProduct = products.find((item) => item.id === id);
    return singleProduct;
  };

  const addToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      return alert("Item already in cart");
    }
    const product = products.find((item) => item.id === id);
    setcart([...cart, product]);
  };

  const quantity = 1;

  const increase = (id) => {
    const newCart = [...cart];
    const item = newCart.find((item) => item.id === id);
    item.quantity = item.quantity + 1;
    setcart(newCart);
  };

  const decrease = (id) => {
    const newCart = [...cart];
    const item = newCart.find((item) => item.id === id);
    item.quantity = item.quantity - 1 <= 0 ? 1 : item.quantity - 1;
    setcart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    cart.find((item) => item.id === id).quantity = 1;
    setcart(newCart);
  };

  const clearCart = () => {
    setcart([]);
  };

  const total = cart.reduce((acc, curr) => {
    let price = acc + (curr.price / 100) * curr.quantity;
    let roundoff = Math.round(price);

    return roundoff;
  }, 0);

  const tax = ((18 / 100) * total).toFixed(2);
  const FinalPrice = (total + Number(tax)).toFixed(2);

  return (
    <productContext.Provider
      value={{
        products,
        filterCategory,
        filtered,
        filterPrice,
        getSingleProduct,
        addToCart,
        cart,
        removeItem,
        clearCart,
        total,
        tax,
        FinalPrice,
        increase,
        decrease,
        quantity,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const AllProducts = () => {
  return useContext(productContext);
};

export default ProductProvider;
