import Clinic from "@/components/Home/Clinic";
import Explore from "@/components/Home/Explore";
import Header from "@/components/Home/Header";
import HeaderHero from "@/components/Home/HeaderHero";
import HeaderLogo from "@/components/Home/HeaderLogo";
import Hero from "@/components/Home/Hero";
import LestDocter from "@/components/Home/LestDocter";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <HeaderLogo />
      <HeaderHero />
      <Hero />
      <Clinic />
      <Explore />
      <LestDocter />
    </>
  );
}

export default Home;
