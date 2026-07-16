import React, { useContext } from 'react'
import './Inicio.css'
import { JuegoContexto } from '../JuegoContext';

const PantallaInicio = () => {
    const {
        setPantalla,
        agregarJugador,
    } = useContext(JuegoContexto)

    return (
        <div className="start-screen">

            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>

            <form className="game-card" onSubmit={(event) => {
                event.preventDefault();
                agregarJugador(event.target.playerName.value);
                setPantalla("Juego");
            }}>

                <div className="game-logo">
                    🎈
                </div>

                <h1 className="game-title">
                    Explota los Globos
                </h1>

                <p className="game-subtitle">
                    ¡Explota todos los globos antes de que desaparezcan!
                </p>

                <div className="player-section">

                    <label htmlFor="playerName" className="input-label">
                        Nombre del jugador
                    </label>

                    <input
                        id="playerName"
                        type="text"
                        className="player-input"
                        placeholder="Escribe tu nombre..."
                        required
                    />

                </div>

                <fieldset className="rules">

                    <legend>Reglas del Juego</legend>

                    <div className="rule">
                        <span className="balloon red"></span>
                        <p>Globo rojo = <strong>+1 punto</strong></p>
                    </div>

                    <div className="rule">
                        <span className="balloon green"></span>
                        <p>Globo verde = <strong>+2 puntos</strong></p>
                    </div>

                    <div className="rule">
                        <span className="balloon blue"></span>
                        <p>Globo azul = <strong>+5 puntos</strong></p>
                    </div>

                    <div className="rule">
                        <span className="balloon black"></span>
                        <p>Globo negro = <strong>-3 puntos</strong></p>
                    </div>

                </fieldset>

                <button
                    type="submit"
                    className="start-button"
                >
                    🎮 Comenzar Juego
                </button>

            </form>

        </div>
    );
}

export { PantallaInicio };