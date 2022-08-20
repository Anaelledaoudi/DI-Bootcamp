import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import {Routes,Route} from 'react-router-dom';
import Contact from './components/Contact';
import './style.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/post_id" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
