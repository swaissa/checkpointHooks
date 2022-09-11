import logo from './logo.svg';
import './App.css';
import { MovieCard } from './components/MovieCard';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MovieCard/>

    </div>
  );
}

export default App;
