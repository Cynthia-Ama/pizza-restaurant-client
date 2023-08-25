import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home'
import Products from './pages/Products'
import Single from './pages/Single'
import About from './pages/About'
import Cart from './pages/Cart'
import Order from "./pages/Order";
import Footer from "./components/Footer";
import Error from './pages/Error'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<Single/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/orders/:id" element={<Order/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
