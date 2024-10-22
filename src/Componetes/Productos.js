//import React from 'react'
import React, { useState } from 'react';

export const Productos = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Producto 1", price: 19.99, image: "300/200" },
        { id: 2, name: "Producto 2", price: 29.99, image: "300/200" },
        { id: 3, name: "Producto 3", price: 39.99, image: "300/200" },
        { id: 4, name: "Producto 4", price: 49.99, image: "300/200" },
        { id: 5, name: "Producto 5", price: 59.99, image: "300/200" },
        { id: 6, name: "Producto 6", price: 89.99, image: "300/200" },
        { id: 7, name: "Producto 7", price: 21.99, image: "300/200" },
        { id: 8, name: "Producto 8", price: 11.99, image: "300/200" },
    ]);

    const addToCart = (productId) => {
        console.log(`Producto ${productId} añadido al carrito`);
        alert(`Producto ${productId} añadido al carrito`);
        // Aquí añadirías la lógica real para agregar al carrito
    };
    return (
        
        <div className="App">
            <h1>Nuestra Tienda</h1>
            <main>
                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            
                            <img src="https://cs6.pikabu.ru/avatars/625/v625646-972862207.jpg" alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price.toFixed(2)} €</p>
                            <button onClick={() => addToCart(product.id)}>Añadir al carrito</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
export default Productos;