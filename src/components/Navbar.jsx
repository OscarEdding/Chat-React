import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

    const {usuario, iniciarSesion, cerrarSesion} = React.useContext(ChatContext)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">Chat</span>
            <div>
                {
                    usuario.activo ? (
                        <button 
                            className="btn btn-outline-success my-2 my-sm-0" 
                            onClick={cerrarSesion} // Recibe el evento cerrarSesion
							/* Si no le colocamos los paréntesis a la función cerrarSesion() 
							o iniciarSesion(), no necesitamos colocar la función */
			
                        >
                            Salir
                        </button>
                    ) : (
                        <button 
                            className="btn btn-outline-success my-2 my-sm-0" 
                            onClick={iniciarSesion} // Recibe el evento iniciarSesion
                        >
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
