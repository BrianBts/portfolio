"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Start from "../../components/Start";
import Footer from "@/components/Footer";


const Section = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-430px 0px',
  });

  useEffect(() => {
    const handleInitialScroll = () => {
      const initialScroll = window.scrollY;
      if (ref.current && initialScroll > ref.current.offsetTop - 430) {
        controls.start('visible');
        window.removeEventListener('scroll', handleInitialScroll);
      }
    };

    if (inView) {
      controls.start('visible');
    } else {
      window.addEventListener('scroll', handleInitialScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleInitialScroll);
    };
  }, [controls, inView, ref]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      id={id}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-backgroundColor dark:bg-backGrey">
      <Navbar />
      <Start />
      <Section id="about-section">
        <About />
      </Section>
      <Section id="skills-section">
        <Skills />
      </Section>
      <Section id="projects-section">
        <Projects />
      </Section>
      <Section id="contact-section">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
};

export default Page;