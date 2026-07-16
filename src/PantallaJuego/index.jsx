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

    const [globo, setGlobo] = useState(
        Math.floor(Math.random() * tablero.length)
    )
    const [color, setColor] = useState(
        Math.floor(Math.random() * colores.length)
    )

    const cambiarEstado = () => {
        setGlobo(Math.floor(Math.random() * tablero.length))
        setColor(Math.floor(Math.random() * colores.length))
    }

    useEffect(() => {
        let time = setInterval(() => {
            cambiarEstado()
        }, 2500)

        return () => {
            clearInterval(time)
        }
    }, [])

    const cambiarAlgunNumero = (posicion) => {
        // console.log(posicion)
        // console.log(numerosRandom)
        for (let i = 0; i < numerosRandom.length; i++) {
            if (numerosRandom[i] == posicion) {
                console.log(numerosRandom[i])
                numerosRandom[i] == Math.random(Math.floor() * tablero.length)
                console.log(numerosRandom[i])
            }
        }
    }

    let num;

    const [posiciones, setPosiciones] = useState(Array(5).fill(0))

    useEffect(() => {
        for (let i = 0; i < posiciones.length; i++) {
            if (posiciones[i] == 0) {
                let copia = [...posiciones]
                console.log(copia)
            }
        }
        console.log(posiciones)
    }, [])

    // useEffect(() => {
    //     for (let i = 0; i < numerosRandom.length; i++) {
    //         if (numerosRandom[i] == 0) {
    //             numerosRandom[i] = numeroRandom()
    //         }
    //     }

    // }, [])

    
    
    const numeroRandom = () => {
        let numero = Math.floor(Math.random() * 40)
        return numero
    }

    let numerosRandom = [0, 0, 0, 0, 0]

    for (let i = 0; i < numerosRandom.length; i++) {
        if (numerosRandom[i] == 0) {
            if (i == 0) {
                numerosRandom[i]
            }
            numerosRandom[i] = numeroRandom()
        } else {
            numerosRandom[i] == numerosRandom[i]
        }
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
                        if (numerosRandom.includes(index)) {
                            return <DivContenedor
                                key={index}
                                activar={true}
                                onCambiarEstado={() => cambiarEstado()}
                                onCambiarPosicion={() => cambiarAlgunNumero(index)}
                                color={colores[Math.floor(Math.random() * colores.length)]}
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