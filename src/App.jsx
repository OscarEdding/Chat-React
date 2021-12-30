import React from "react"
import { ChatContext } from "./context/ChatProvider"
import Chat from "./components/Chat"
import Navbar from "./components/Navbar"

const App = () => {
	
  const { usuario } = React.useContext(ChatContext)

	return usuario.activo !== null ? (
		<div>
			<Navbar />
			{
        usuario.activo ? (
          <Chat /> 
        ) : ( 
          <div 
            className="text-center mt-5 lead"
          >
            Click en acceder para iniciar chat
          </div> 
        )
      }
		</div>
	) : (
		<div>Cargando...</div>
	)
}

export default App
