import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ArticleList } from './components/ArticleList';
import { Footer } from './components/Footer';
import { TopicList } from './components/TopicList';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route exact path="/topics" element={<TopicList />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
