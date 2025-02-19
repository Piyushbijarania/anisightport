/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Piyush Choudhary",
  title: "Web3 Developer & Content Creator",
  email: "piyush.gag6513@gmail.com",
  gitHub: "https://github.com/Piyushbijarania",
  instagram: "",
  linkedIn: "",
  medium: "",
  twitter: "https://x.com/Piyushj8i",
  youTube: "",
};

const primaryColor = "#93d9ef";
const secondaryColor = "#93d9ef";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
