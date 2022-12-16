import Navbar from '../src/components/Navbar';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Work from '../src/components/Work';
import Contact from '../src/components/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
