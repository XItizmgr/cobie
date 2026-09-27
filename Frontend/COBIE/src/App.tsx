import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Feature } from "./components/Feature";
import { About } from "./components/About";
import { Terminal } from "./components/Terminal";
import { Download } from "./components/Download";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Feature />
        <Terminal />
        <Download />
      </main>

      <Footer />
    </>
  );
}

export default App;
