"use client"
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Start from "../../components/Start";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="relative bg-backgroundColor dark:bg-backGrey">
      <Navbar />
      <Start />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default Page;
