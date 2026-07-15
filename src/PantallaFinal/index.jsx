import React from 'react'
import './PantallaFinal.css'

const PantallaFinal = () => {
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
                    <strong> Esteban</strong>
                </p>

                <div className="final-score">

                    <span>Puntaje Final</span>

                    <h2>28</h2>

                </div>

                <section className="stats">

                    <h3>📊 Estadísticas</h3>

                    <div className="stat">
                        <span>🎈 Globos explotados</span>
                        <strong>35</strong>
                    </div>

                    <div className="stat">
                        <span>🟢 Globos positivos</span>
                        <strong>30</strong>
                    </div>

                    <div className="stat">
                        <span>⚫ Globos negros</span>
                        <strong>5</strong>
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

                <button className="play-again">
                    🔄 Volver a jugar
                </button>

            </section>

        </main>
    )
}

export { PantallaFinal };