import React, { useState } from "react";
import appFireBase from "../credencialesFireBase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFireBase)


export const Login = () => {
    const [registrando,setRegistrando]=useState(false)
    const funcAutenticacion = async(e) =>{
        e.preventDefault();
        const correo=e.target.email.value;
        const contraseña =e.target.password.value;
        if(registrando){
        try {
            await createUserWithEmailAndPassword(auth,correo,contraseña)
        } catch (error) {
            alert("asegurate que la contraseña tenga mas de 8 caracteres")
        }
            
        }else {
            try {
                await signInWithEmailAndPassword(auth,correo,contraseña)
            } catch (error) {
                alert("el correo o la copntraseña son erroneos")
            }
            

        }
    }
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src="https://imgs.search.brave.com/0kCktZXmaqBN7LsUG30sz43vxbhcOHgKUd0ZDFRBEnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzM3OC0z/NzgyMTQwX2Rpc2Nv/cmQtc2VydmVyLWlj/b24tY3V0ZS1pbWFn/ZW5lcy1wYXJhLXBl/cmZpbC1kZS5wbmc" className="estilo-foto-perfil" alt="" />
                            <form onSubmit={funcAutenticacion}>
                                <input id="email"  type="text" placeholder="ingresar e-mail" className="cajaDeTexto"/>
                                <input id="password" type="password" placeholder="ingresar contraseña" className="cajaDeTexto"/>
                                <button className="btnForm">{registrando ? "registrate": "inicia sesion"}</button>
                            </form>
                            <h4 className="texto">{registrando ? "si ya tienes cuenta": "no tienes cuenta"}<button className="btnCambio" onClick={()=> setRegistrando(!registrando)}>{registrando ? "inicia sesion": "Registrate"}</button></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                <img src="https://imgs.search.brave.com/EsbnmR18op5E3DYTIcWYVCF2vv8fpAxkbB6R-33rqX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzIwMDk4NS9p/c29sYXRlZC9wcmV2/aWV3L2MzMzhhMjlj/ZTIyN2Q3NTFiMjdm/OGIxNDFjZGI1YWZh/LW1hbm8tY29uLWVs/LWljb25vLWRlLWNh/cnJpdG8tZGUtY29t/cHJhcy5wbmc"  className="tamaño-imagen" />
               
                </div>
            </div>
        </div>
    )
}