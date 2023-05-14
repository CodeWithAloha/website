import HEAD from "next/head";
import NavBar from "@/components/NavBar";

import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-screen  bg-gradient-to-tr from-cyan-200 to bg-white-200">
          <NavBar />
          <HomePage />
        </section>

        <About />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
