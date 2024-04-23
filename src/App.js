
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PokeCard from './components/PokeCard';
import PokeList from './components/PokeList';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<PokeCard/>} />
      </Routes>
  
    
    </div>
  );
}

export default App;
