import React from 'react'
import './Juego.css'
import { useState } from 'react'
import { useContext } from 'react'
import { JuegoContexto } from '../JuegoContext'
import { useEffect } from 'react'
import { DivContenedor } from '../DivContenedor'
import { Reloj } from './Reloj'


const PantallaJuego = () => {
    const tablero = [
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}
    ]

    const colores = [
        'red',
        'green',
        'blue',
        'black'
    ]

    const {
        setPantalla,
        jugador,
        puntaje,
    } = useContext(JuegoContexto)

    const posicionLibre = (globos, totalTablero) => {
        let posicion;

        do {
            posicion = Math.floor(Math.random() * totalTablero)
        } while (!globos.every((globo) => globo.posicion != posicion))

        return posicion;
    }

    const obtenerColor = () => {
        let color = ''
        let posicion = Math.floor(Math.random() * colores.length)
        color = colores[posicion]
        return color
    }

    const [globos, setGlobos] = useState([
        {
            id: Math.floor(Date.now() * Math.random()),
            posicion: posicionLibre([], tablero.length),
            color: obtenerColor()
        }
    ])

    useEffect(() => {
        let segundo = setInterval(() => {
            setGlobos((prev) => {
                if (prev.length < 5) {
                    return [
                        ...prev,
                        {
                            id: Math.floor(Date.now() * Math.random()),
                            posicion: posicionLibre(prev, tablero.length),
                            color: obtenerColor()
                        }
                    ]
                } else {
                    return [
                        ...prev.slice(1),
                        {
                            id: Math.floor(Date.now() * Math.random()),
                            posicion: posicionLibre(prev.slice(1), tablero.length),
                            color: obtenerColor()
                        }
                    ]
                }
            })
        }, 1000)

        return () => {
            clearInterval(segundo)
        }
    }, [])

    const eliminarPulsado = (id) => {
        let copia = globos.filter(globo => globo.id != id)
        copia = [
            ...copia,
            {
                id: Math.floor(Date.now() * Math.random()),
                posicion: posicionLibre(copia, tablero.length),
                color: obtenerColor()
            }
        ]
        setGlobos(copia)
    }

    return (
        <main className="game">

            <header className="game-header">

                <div className="game-title">
                    <h1>🎈 Explota los Globos</h1>
                </div>

                <div className="game-info">

                    <div className="info-card">
                        <span>👤</span>
                        <p>{jugador}</p>
                    </div>

                    <div className="info-card">
                        <span>⭐</span>
                        <p>{puntaje}</p>
                    </div>

                    <Reloj />

                </div>

            </header>

            <section className="game-board">
                {
                    tablero.map((pos, index) => {
                        let globoActual = globos.find(globo => globo.posicion == index)
                        if (globoActual) {
                            return <DivContenedor
                                key={index}
                                activar={true}
                                onEliminarPulsado={() => eliminarPulsado(globoActual.id)}
                                color={globoActual.color}
                            />
                        } else {
                            return <DivContenedor
                                key={index}
                                activar={false}
                            />
                        }
                    })
                }

            </section>

            <footer className="game-footer">
                Explota los globos antes de que desaparezcan.
            </footer>

        </main>
    )
}

export { PantallaJuego };