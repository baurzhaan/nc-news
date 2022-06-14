import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import { TestComponent } from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/test" element={<TestComponent />}/>
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
