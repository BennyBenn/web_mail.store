
import React from 'react'

export const Carrito = () => {
  return (
    <div class="carrito">
            <h2>Tu Carrito</h2>
            <p>Elige forma de entrega</p>
            <input type="text" placeholder="Introduce tu dirección" id="direccion"/>
            <div class="producto-container">
                <div class="producto">
                    <img src="imagen_producto.jpg" alt="Imagen del producto" id="imagen-producto"/>
                    <div class="descripcion">
                        <p id="descripcion-producto">Descripción del producto</p>
                        <label for="cantidad">Cantidad:</label>
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <p id="precio-total">Precio total: $<span id="total-a-pagar">0</span></p>
                    </div>
                </div>
            </div>
            <div class="entrega-resumen">
                <p>Fecha aproximada de entrega:</p>
                <label id="fecha-entrega">Hoy, 15 de Octubre de 2024</label>
                <br/><br/>
                <div class="botones-pago">
                    <button class="pagar mercadopago">Pagar con Mercado Pago</button>
                    <button class="pagar paypal">Pagar con PayPal</button>
                    <div class="resumen">
                        <h3>Resumen de Compra</h3>
                        <ul>
                            <li>Envío: $10.00</li>
                            <li>Total: $<span id="total-general">0</span></li>
                        </ul>
                        <button class="confirmar">Confirmar Compra</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
