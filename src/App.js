import React from "react";
import { Features, Navbar, Product } from "components";

const App = () => {
  return (
    <span className="bg-amber-100">
      <Navbar />
      <Features />
      <Product />
    </span>
  );
};

export default App;
