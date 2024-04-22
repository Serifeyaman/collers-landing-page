import React from "react";
import {
  Collection,
  Features,
  Feedbacks,
  Footer,
  JoinUs,
  Map,
  Navbar,
  Product,
} from "components";

const App = () => {
  return (
    <span className="bg-amber-100">
      <Navbar />
      <Features />
      <Product />
      <JoinUs />
      <Feedbacks />
      <Collection />
      <Map />
      <Footer />
    </span>
  );
};

export default App;
