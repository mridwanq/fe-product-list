import './App.css';
import { Navbar, NavbarMobile } from './components/navbar';
import { useState } from 'react';
import { ProductListPage } from './pages/productPage';

function App() {
  const [search, setSearch] = useState('');
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <NavbarMobile />
      <ProductListPage search={search} />
    </>
  );
}

export default App;
