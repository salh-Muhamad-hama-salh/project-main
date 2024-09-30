import Clinic from "@/components/Home/Clinic";
import ClinicPosition from "@/components/Home/ClinicPosition";
import Explore from "@/components/Home/Explore";
import Header from "@/components/Home/Header";
import HeaderHero from "@/components/Home/HeaderHero";
import HeaderLogo from "@/components/Home/HeaderLogo";
import Hero from "@/components/Home/Hero";
import Hospitals from "@/components/Home/Hospitals";
import Imaging from "@/components/Home/Imaging";
import Laboratory from "@/components/Home/Laboratory";
import LestDocter from "@/components/Home/LestDocter";
import Pharmacy from "@/components/Home/Pharmacy";
import Physiotherapy from "@/components/Home/Physiotherapy";
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
      <Hospitals />
      <ClinicPosition />
      <Pharmacy />
      <Laboratory />
      <Imaging />
      <Physiotherapy />
    </>
  );
}

export default Home;
