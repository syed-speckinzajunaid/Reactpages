import './App.css';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Services } from './components/pages/Services';
import PagenotFound from './components/pages/PagenotFound';
import Product from './components/pages/Product';

function App() {
  return (
    <>
    <BrowserRouter>
    <ButtonAppBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="*" element={<PagenotFound/>}/>

      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}/>
      

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
