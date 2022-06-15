import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ArticleList } from './components/ArticleList';
import { Footer } from './components/Footer';
import { TopicList } from './components/TopicList';
import { UserList } from './components/UserList';
import { SingleTopic } from './components/SingleTopic';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      
      <Routes>
        <Route exact path="/" element= {<ArticleList /> } />
        <Route exact path="/articles" element={ <ArticleList /> } />
        <Route exact path="/topics" element={ <TopicList /> }/>
        <Route exact path="/topics/:slug" element={ <SingleTopic /> } />
        <Route exact path="/users" element={ <UserList /> }/>
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
