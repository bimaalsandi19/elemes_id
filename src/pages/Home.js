import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Category from "../parts/Home/Category";
import Hero from "../parts/Home/Hero";
import Trending from "../parts/Home/Trending";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Trending />
      <Footer />
    </>
  );
}
