import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
