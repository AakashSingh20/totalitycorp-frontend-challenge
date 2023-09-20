// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Product } from "./components/Product";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
