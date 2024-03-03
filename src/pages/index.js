import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import React from 'react';
import ReactGA from 'react-ga4'; // ga4 import

export default function Home() {

  const TRACKING_ID = "G-4TRT9PDZQ9"; // Change tracking ID to use your own on Google Analytics. ID currently set is used for my development environment.
  ReactGA.initialize(TRACKING_ID);
  // ReactGA.pageview(document.location.pathname); // This line is currently causing 'ReferenceError: document is not defined in reactjs'

  return (
    <>
      <main>
        <HomePage />
        <About />
        <Timeline />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
