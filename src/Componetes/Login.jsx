import React, { useState } from "react";
import appFireBase from "../credencialesFireBase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFireBase)


export const Login = () => {
    const Mensaje = document.getElementById('AlertMensaje');
    const [registrando,setRegistrando]=useState(false)
    const funcAutenticacion = async(e) =>{
        e.preventDefault();
        const correo=e.target.email.value;
        const contraseña =e.target.password.value;
        if(registrando){
        try {
            await createUserWithEmailAndPassword(auth,correo,contraseña)
        } catch (error) {
            Mensaje = "Asegurate que la contraseña tenga mas de 8 caracteres";
        }
            
        }else {
            try {
                await signInWithEmailAndPassword(auth,correo,contraseña)
            } catch (error) {
                Mensaje = "El correo o la contraseña son incorrectos";
            }
            

        }
    }
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src="https://imgs.search.brave.com/0kCktZXmaqBN7LsUG30sz43vxbhcOHgKUd0ZDFRBEnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzM3OC0z/NzgyMTQwX2Rpc2Nv/cmQtc2VydmVyLWlj/b24tY3V0ZS1pbWFn/ZW5lcy1wYXJhLXBl/cmZpbC1kZS5wbmc" className="estilo-foto-perfil" alt="" />
                            <form onSubmit={funcAutenticacion}>
                                <input id="email"  type="text" placeholder="ingresar e-mail" className="cajaDeTexto"/>
                                <input id="password" type="password" placeholder="ingresar contraseña" className="cajaDeTexto"/>
                                <div className="col-md-12 text-right"><button className="btnForm text-right">{registrando ? "Registrate": "Inicia sesion"}</button></div>
                            </form>
                            <h4 className="texto">{registrando ? "Si ya tienes cuenta": "No tienes cuenta  "}<button className="btnCambio" onClick={()=> setRegistrando(!registrando)}>{registrando ? "Inicia sesion": "Registrate"}</button></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}