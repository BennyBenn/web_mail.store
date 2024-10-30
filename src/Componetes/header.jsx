import { Carrito } from './Carrito'
import appFireBase from 'D:/GitGub/web_mail.store/src/credencialesFireBase.js'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFireBase)
export function Header() {
    return (
        <header>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 text-center">
                        <h1> <i class="fa-solid fa-shop"></i>  Sycom Store</h1>
                    </div>
                    <div class="col-md-1 header-boton">
                        <ul>
                            <li>
                                <a href="./Carrito.jsx"><i class="fa-solid fa-cart-shopping"></i>Carrito</a>
                            </li>
                            <li>
                                <a onClick={() => signOut(auth)}><i class="fa-solid fa-right-from-bracket"></i>Salir</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )

}