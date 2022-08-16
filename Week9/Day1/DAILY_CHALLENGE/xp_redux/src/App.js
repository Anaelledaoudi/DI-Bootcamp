import logo from './logo.svg';
import './App.css';
import MovieDetail from './Components/MovieDetail.js';
import MovieList from './Components/MovieList.js';

function App() {
  return (
    <div className="App">
      <MovieList/>
      <MovieDetail/>

    </div>
  );
}

export default App;
