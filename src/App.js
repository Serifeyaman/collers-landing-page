import React from "react";
import { Features, JoinUs, Navbar, Product } from "components";

const App = () => {
  return (
    <span className="bg-amber-100">
      <Navbar />
      <Features />
      <Product />
      <JoinUs />
    </span>
  );
};

export default App;
