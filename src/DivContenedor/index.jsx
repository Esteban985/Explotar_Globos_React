import { useContext, useEffect } from 'react';
import React from 'react'
import { Globo } from '../Globo';
import { JuegoContexto } from '../JuegoContext';

const DivContenedor = ({ activar, color, onEliminarPulsado }) => {
    const {
        verificarPuntos,
    } = useContext(JuegoContexto)

    if (activar) {
        return (
            <div className="cell balloon-cell" onClick={() => { onEliminarPulsado(), verificarPuntos(color) }}>
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