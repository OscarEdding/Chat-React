import React from 'react'
import {auth, provider, db} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = (props) => {
    
    const dataUsuarioInicial = {email: null, uid: null, activo: null}
    const [usuario, setUsuario] = React.useState(dataUsuarioInicial)
    const [mensajes, setMensajes] = React.useState([])

    React.useEffect(() => {
        detectarUsuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        /* Con el comentario de arriba deshabilitamos el warning Eslint del
        useEffect, por lo que no aparecerá más. */
    }, [])
    
    const detectarUsuario = () => {
        auth.onAuthStateChanged(userChange => {
            if(userChange){
                // console.log(userChange)
                setUsuario({email: userChange.email, uid: userChange.uid, activo: true})
                cargarMensajes()
            }else{
                // console.log(userChange)
                setUsuario({email: null, uid: null, activo: false})
            }
        })
    }

    const iniciarSesion = async() => {
        try {
            const res = await auth.signInWithPopup(provider)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    const cargarMensajes = () => {
        db.collection('messages').orderBy('fecha')
        .onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            /* Devolvemos toda la data. Esto es lo mismo que hacer
            un forEach.
            EXPLICACIÓN: Esta query hace todo el recorrido con el .map
            y guarda en arrayMensajes todos nuestros mensajes que
            tengamos almacenados en chat. */
            /* El onSnapshot consume muchos recursos, por lo que solo es recomendable 
            utilizarlo en caso de que se necesiten datos en tiempo real. */
            setMensajes(arrayMensajes)
        }) 
        /* onSnapshot detecta nuestra base de datos en tiempo real.
           query va a ser toda nuestra colección. */
    } 

    const agregarMensaje = async (uid, texto) => {
        try {
            await db.collection('messages').add({
                uid: uid,
                texto: texto,
                fecha: Date.now()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider value={{usuario, iniciarSesion, cerrarSesion, mensajes, agregarMensaje}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
