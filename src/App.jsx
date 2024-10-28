import { useState } from 'react';
import './App.css'
import { Products } from './Componetes/productos'
import { products as initailProducts  } from 'C:/Users/monica/Documents/e-comerse/web_mail.store/src/Componetes/productos/products.json'
import { Header } from './Componetes/header.jsx';
import { Footer } from './Componetes/footer.jsx'; 
import appFireBase from '../src/credencialesFireBase'
import { getAuth, onAuthStateChanged} from 'firebase/auth' 
import {Login} from 'C:/Users/monica/Documents/e-comerse/web_mail.store/src/Componetes/Login.jsx'; 
const auth= getAuth(appFireBase)

 
function App() {
  
const [products, setProducts] = useState(initailProducts)
const [filters, setFilters] = useState({
  category: 'all',
  minPrice:0
})

const filterProducts = (products) => {
  return products.filter(product => {
    return (
      product.price >= filters.minPrice &&
      (
        filters.category ==='all' ||
        product.category === filters.category
      )
    )
  })
}

const filteredProducts = filterProducts(products)

const [user, setUser] = useState(null)
onAuthStateChanged(auth,(usuarioFireBase)=>{
  if(usuarioFireBase){
    setUser(usuarioFireBase)
  }else setUser(null)
})
  return (
   
    <>

    {user ?  <Products products={filteredProducts} correoUsuario={user.email}/> : <Login/>}
    {user ?  <Header pasarFiltros={setFilters}/>: null}
    
    
     <Footer />
     </>

  );
}

export default App;
