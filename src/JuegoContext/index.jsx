import React from 'react'
import { useState } from 'react';
const JuegoContexto = React.createContext();

const JuegoProvider = ({ children }) => {
    //Estados
    const [pantalla, setPantalla] = useState('Inicio')
    const [jugador, setJugador] = useState('')

    const agregarJugador = (nombre) => {
        setJugador(nombre);
    }

    return (
        <JuegoContexto.Provider value={{
            pantalla,
            setPantalla,
            agregarJugador,
            jugador,
        }}>
            {children}
        </JuegoContexto.Provider>
    );
}

export { JuegoContexto, JuegoProvider };