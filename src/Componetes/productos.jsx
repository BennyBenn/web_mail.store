import './Products.css'
import { AddToCartIcon  } from './iconos.jsx'
import appFireBase from 'C:/Users/monica/Documents/e-comerse/web_mail.store/src/credencialesFireBase.js'
import { getAuth, signOut} from 'firebase/auth' 
const auth= getAuth(appFireBase)

export function Products ({ products}) {
    return (
      
      <main className='products'>
        
        <button onClick={()=> signOut(auth)}> salir</button>
        <ul>
          {products.slice(0, 20).map(product => {
  
            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                    <button>
                        <AddToCartIcon />
                    </button>
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
  