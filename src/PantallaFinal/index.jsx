import React from 'react'
import './PantallaFinal.css'
import { useContext } from 'react'
import { JuegoContexto } from '../JuegoContext'

const PantallaFinal = () => {
    const {
        setPantalla,
        jugador,
        puntaje,
        globosTotal,
        globosPositivos,
        globosNegros
    } = useContext(JuegoContexto)
    return (
        <main className="results-screen">

            <section className="results-card">

                <div className="trophy">
                    🏆
                </div>

                <h1 className="results-title">
                    ¡Partida Terminada!
                </h1>

                <p className="results-player">
                    Excelente trabajo
                    <strong>{jugador}</strong>
                </p>

                <div className="final-score">

                    <span>Puntaje Final</span>

                    <h2>{puntaje}</h2>

                </div>

                <section className="stats">

                    <h3>📊 Estadísticas</h3>

                    <div className="stat">
                        <span>🎈 Globos explotados</span>
                        <strong>{globosTotal}</strong>
                    </div>

                    <div className="stat">
                        <span>🟢 Globos positivos</span>
                        <strong>{globosPositivos}</strong>
                    </div>

                    <div className="stat">
                        <span>⚫ Globos negros</span>
                        <strong>{globosNegros}</strong>
                    </div>

                </section>

                <section className="message">

                    <h3>
                        🎉 ¡Muy bien!
                    </h3>

                    <p>
                        Seguiste explotando globos durante toda la partida.
                    </p>

                </section>

                <button className="play-again" onClick={() => setPantalla('Inicio')}>
                    🔄 Volver a jugar
                </button>

            </section>

        </main>
    )
}

export { PantallaFinal };