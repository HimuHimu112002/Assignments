import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import "../src/index.css";
import Person from "./components/Person";
import Temperature from "./components/Temperature";
import Massage from "./components/Massage";
function App() {
  return (
    <>

      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />
      <Person/>
      <Temperature/>
      <Massage/>
      
    </>
  );
}

export default App;
