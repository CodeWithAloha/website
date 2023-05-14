import NavBar from "@/components/NavBar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <header>
        <NavBar />
      </header> */}
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
