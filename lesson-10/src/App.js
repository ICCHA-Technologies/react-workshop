import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products/1">
                Product 1
              </Link>
            </li>
            <li>
              <Link to="/products/2">
                Product 2
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
