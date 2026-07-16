import { useContext, useEffect } from 'react';
import React from 'react'
import { Globo } from '../Globo';
import { JuegoContexto } from '../JuegoContext';

const DivContenedor = ({ onCambiarEstado, activar, color, onCambiarPosicion }) => {
    const {
        verificarPuntos,
    } = useContext(JuegoContexto)

    if (activar) {
        return (
            <div className="cell balloon-cell" onClick={() => { onCambiarEstado(), verificarPuntos(color) }}>
                <Globo color={color} />
            </div>
        );
    } else {
        return (
            <div className='cell'>
            </div>
        )
    }
}

export { DivContenedor };