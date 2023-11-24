"use client"
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Start from "../../components/Start";
import Footer from "@/components/Footer";
import TimeLine from "@/components/TimeLine";

const Page = () => {
  return (
    <div className="relative bg-backgroundColor dark:bg-backGrey">
      <Navbar />
      <Start />
      <About />
      <TimeLine/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
