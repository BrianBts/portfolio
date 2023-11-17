"use client";
import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Start from "../components/Start";

const Page = () => {
  return (
    <div className="relative bg-backgroundColor">
      <Navbar />
      <Start />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Page;
