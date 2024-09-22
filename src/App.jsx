import './App.css';
import Loyout from './Components/Layout';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loyout />}>
            <Route index element={<Home />} />
            <Route path='/:slug' element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
