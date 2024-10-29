import  appFireBase  from 'D:/GitGub/web_mail.store/src/credencialesFireBase.js'
import { getAuth, signOut} from 'firebase/auth' 
const auth= getAuth(appFireBase)
export function Header (){
return(
    <header>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-11">
                    <h1> <i class="fa-solid fa-shop"></i> Sycom Store</h1> 
                </div>
                <div class="col-md-1">
                    <ul class="boton-header">
                        <li><a class="fa-solid fa-cart-shopping"></a> Carrito</li>
                        <li><a class="fa-solid fa-right-from-bracket" onClick={()=> signOut(auth)}></a>Salir</li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </header>
)

}