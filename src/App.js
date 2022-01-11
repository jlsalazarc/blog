
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Routes, 
} from 'react-router-dom';
import './App.css';
import { ProductCard } from './pages/ProductCard';
import { ProductDetail } from './pages/ProductDetail';



function Navbar() {

  const links = [
    {path: '/products', content: 'products'},
    {path:'/users', content:'user'},
  ];

  return (
    <nav>
      <ul>
        {links.map(({path, content},index) => (
          <li key={index}>
            <Link to={path}>{content}</Link>
          </li>
        ))}
      </ul>
    </nav>

  )
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCard />}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App;
