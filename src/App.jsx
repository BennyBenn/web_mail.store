import { useState } from 'react';
import './App.css'
import { Products } from './Componetes/productos'
import { products as initialProducts } from '../src/Componetes/productos/products.json'
import { Header } from './Componetes/header.jsx';
import { Footer } from './Componetes/footer.jsx';
import appFireBase from '../src/credencialesFireBase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Login } from '../src/Componetes/Login.jsx';
import { Carrito } from './Componetes/Carrito.jsx';

const auth = getAuth(appFireBase)


function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (usuarioFireBase) => {
    if (usuarioFireBase) {
      setUser(usuarioFireBase)
    } else setUser(null)
  });

  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (

    <>
      {user ? <Header /> : null}
      {user ? <Products products={filteredProducts} correoUsuario={user.email} /> : <Login />}
      <Footer pasarFiltros={setFilters} />
    </>
  );
}

export default App;
