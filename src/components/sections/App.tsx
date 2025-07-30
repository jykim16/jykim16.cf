// React is automatically imported in modern setups
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <footer className="bg-slate-900 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Jonathan Kim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
