import React from 'react'
import './Juego.css'
import { useState } from 'react'
import { useContext } from 'react'
import { JuegoContexto } from '../JuegoContext'
import { useEffect } from 'react'
import { DivContenedor } from '../DivContenedor'

const PantallaJuego = () => {
    const tablero = [
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}
    ]

    const {
        setPantalla,
        jugador,
    } = useContext(JuegoContexto)

    const [puntaje, setPuntaje] = useState(0)
    const [tiempo, setTiempo] = useState(30)
    const [pintar, setPintar] = useState(true)

    const num = Math.floor(Math.random() * 40) + 1

    const sumarUno = () => {
        setPuntaje(puntaje + 1)
    }

    // useEffect(() => {
    //     let numero = 30
    //     const intervalo = setInterval(() => {
    //         numero -= 1;
    //         setTiempo(numero)
    //         if (numero == -1) {
    //             setPantalla('Final')
    //         }
    //     }, 1000);

    //     return () => {
    //         clearInterval(intervalo);
    //     };

    // }, []);



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

                    <div className="info-card">
                        <span>⏱</span>
                        <p>{tiempo}</p>
                    </div>

                </div>

            </header>

            <section className="game-board">
                {
                    tablero.map((pos, index) => {
                        console.log(num)
                        if (num == index) {
                            return <DivContenedor key={index} num={num} onPintar={() => setPintar(!pintar)} activar={'si'} />
                        } else {
                            return <DivContenedor key={index} num={num} onPintar={() => setPintar(!pintar)} activar={'no'} />
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