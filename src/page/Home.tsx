import { useEffect } from "react";
import About from "../component/About";
import Contact from "../component/Contact";
import Hero from "../component/Hero";
import Skills from "../component/Skills";
import Work from "../component/Work";
import { profile } from "../data/profile";

export default function Home() {
  useEffect(() => {
    document.title = `${profile.firstName} ${profile.lastName} | ${profile.role}`;
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
