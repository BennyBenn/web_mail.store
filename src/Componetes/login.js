import React, { useState } from 'react';

return(
    <div className="frame">
    <label className="mensaje">¡Hola, favor de iniciar sesión. <br /> si no tienes cuenta puedes registrarte.</label>
    <br /><br />
    <div className="item1">Usuario </div>

    <div className="item2">
        <input id="usuario" type="text" className="registros" />
    </div>

    <div className="item1">Contraseña</div>

    <div className="item2">
        <input id="contraseña" type="password" className="registros" />
    </div>

    <br />
    <div>
        <button id="btnregistrar" className="btn">Iniciar Sesión</button>
        <button id="btniniciar" className="btn1">Registrarse</button> 
    </div>
</div>
);
export default App;