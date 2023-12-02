import React from "react";

import { AboutUs, Start, FindUs, Footer, Header } from "../../container";

const Homepage = () => (
  <div>
    <Header />
    <Start />
    <AboutUs />
    {/* <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery /> */}
    <FindUs />
    <Footer />
  </div>
);

export default Homepage;
