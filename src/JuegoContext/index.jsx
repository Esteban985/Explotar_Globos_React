import React from 'react'
import { useState } from 'react';
const JuegoContexto = React.createContext();

const JuegoProvider = ({ children }) => {
    //Estados
    const [pantalla, setPantalla] = useState('Inicio')
    const [jugador, setJugador] = useState('')
    const [puntaje, setPuntaje] = useState(0)
    const [globosTotal, setGlobosTotal] = useState(0)
    const [globosPositivos, setGlobosPositivos] = useState(0)
    const [globosNegros, setGlobosNegros] = useState(0)

    const valorGlobos = [
        { color: 'red', valor: 1 },
        { color: 'green', valor: 2 },
        { color: 'blue', valor: 5 },
        { color: 'black', valor: -3 }
    ]

    const agregarJugador = (nombre) => {
        setJugador(nombre);
    }

    const verificarPuntos = (color) => {
        let temp = valorGlobos.filter(item => item.color == color)

        setPuntaje(puntaje + temp[0].valor)

        setGlobosTotal((prev) => prev + 1)

        if (color != 'black') {
            setGlobosPositivos((prev) => prev + 1)
        } else {
            setGlobosNegros((prev) => prev + 1)
        }
    }

    return (
        <JuegoContexto.Provider value={{
            pantalla,
            setPantalla,
            agregarJugador,
            jugador,
            puntaje,
            verificarPuntos,
            globosTotal,
            globosPositivos,
            globosNegros
        }}>
            {children}
        </JuegoContexto.Provider>
    );
}

export { JuegoContexto, JuegoProvider };