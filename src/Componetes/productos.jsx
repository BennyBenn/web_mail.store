
import './Products.css'
import { AddToCartIcon  } from './iconos.jsx'

export function Products ({ products}) {
    return (
      <main className='products'>
        <ul>
          {products.slice(0, 15).map(product => {
            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong>
                  <br /> 
                  <b>- ${product.price}</b>
                </div>
                <div>
                    <button>
                    <AddToCartIcon/>
                    </button>
                </div>
              </li>
            )
          })}
        </ul>
        
      </main>
    )
  }
  