
import './App.css';
import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Topbar } from './components/Topbar';
import Digitize from './components/Pages/Digitize';
import { Automation } from './components/Pages/Automation';
import { Home } from './components/Pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar />
    <Logo />
    <Navbar />
    <Routes>
      <Route path='/' exact Component={Home} />
    <Route path='/digitizes' exact Component={Digitize} />
    <Route path='/automation' exact Component={Automation} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
