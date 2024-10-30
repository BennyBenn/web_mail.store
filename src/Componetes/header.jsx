import { Link } from 'react-router-dom'
import  appFireBase  from 'D:/GitGub/web_mail.store/src/credencialesFireBase.js'
import { getAuth, signOut} from 'firebase/auth' 
const auth= getAuth(appFireBase)
export function Header (){
return(
    <header>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-11">
                    <Link to={"/"}>
                        <h1> <i class="fa-solid fa-shop"></i> Sycom Store</h1> 
                    </Link>
                    
                </div>
                <div class="col-md-1">
                    <ul class="boton-header">
                        <Link to={"/Carrito"}>
                            <li>
                                <span class="fa-solid fa-cart-shopping">Carrito</span> 
                            </li>
                        </Link>
                        
                        <li><a class="fa-solid fa-right-from-bracket" onClick={()=> signOut(auth)}></a>Salir</li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </header>
)

}