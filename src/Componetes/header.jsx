import { Link } from 'react-router-dom'
import appFireBase from 'D:/GitGub/web_mail.store/src/credencialesFireBase.js'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFireBase)
export function Header() {
    return (
        <header>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-11">
                            <h1> <i class="fa-solid fa-shop"></i> Sycom Store</h1>
                    </div>
                    <div className="col-md-1">
                        <ul className="boton-header">
                            <li>
                                <span className="fa-solid fa-cart-shopping">Carrito</span>
                            </li>
                            <li>
                                <a className="fa-solid fa-right-from-bracket" onClick={() => signOut(auth)}></a>Salir
                            </li>

                        </ul>

                    </div>
                </div>
            </div>

        </header>
    )

}