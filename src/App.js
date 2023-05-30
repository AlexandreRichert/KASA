import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element ={<Home /> } />
        <Route path='/about' element ={<About /> } />
        <Route path='/accomodation' element ={<Accomodation /> } />
        <Route path='/*' element ={<Error /> } />
      </Routes>
    </div>
  );
}

export default App;
