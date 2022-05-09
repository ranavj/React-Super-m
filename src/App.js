import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home  from './components/Home';
import About from './components/About';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route> 
        <Route path='/about' exact element={<About />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails /> }  />
        <Route path='/cart' element={<Cart />}/>
      </Routes>     
    </div>
  );
}

export default App;
