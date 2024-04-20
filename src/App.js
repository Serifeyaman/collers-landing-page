import React from "react";
import { Features, Footer, JoinUs, Navbar, Product } from "components";

const App = () => {
  return (
    <span className="bg-amber-100">
      <Navbar />
      <Features />
      <Product />
      <JoinUs />
      <Footer />
    </span>
  );
};

export default App;
