import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
          <Route exact path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
