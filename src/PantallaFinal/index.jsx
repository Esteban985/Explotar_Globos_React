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
        globosNegros,
        reiniciarTodo,
        conservarNombre
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
                    <br />
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
                    {(puntaje < 0) && (
                        <>
                            < h3 >¡Ten cuidado!</h3>
                            <p>¡Cuidado con los globos negros!</p>
                        </>
                    )}
                    {(puntaje > 0 && puntaje <= 10) && (
                        <>
                            < h3 >¡Buen Intento!</h3>
                            <p>¡Sigue practicando!</p>
                        </>
                    )}
                    {(puntaje > 10 && puntaje <= 25) && (
                        <>
                            < h3 >¡Muy bien!</h3>
                            <p>¡Tienes mucha habilidad!</p>
                        </>
                    )}
                    {(puntaje > 25) && (
                        <>
                            < h3 >¡Excelente!</h3>
                            <p>¡Eres un maestro explotando globos!</p>
                        </>
                    )}

                </section>

                <div className='botones'>
                    <button className="play-again" onClick={() => { setPantalla('Inicio'), reiniciarTodo() }}>
                        🔄 Volver a jugar
                    </button>

                    <button className='play-again' onClick={() => { conservarNombre(), reiniciarTodo() }}>
                        Conservar Nombre ?
                    </button>
                </div>
            </section>

        </main >
    )
}

export { PantallaFinal };