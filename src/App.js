import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element ={<Home /> } />
        <Route path='/about' element ={<About /> } />
        <Route path='/accomodation' element ={<Accomodation /> } />
        <Route path='/*' element ={<Error /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
