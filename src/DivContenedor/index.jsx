import React from 'react'
import { Globo } from '../Globo';

const colores = [
    'red',
    'green',
    'blue',
    'black'
]

const DivContenedor = ({ num, onPintar, activar }) => {
    return (
        <div className="cell" onClick={() => onPintar}>
            {(activar == 'si') && <Globo color={'red'} />}
        </div>
    );
}

export { DivContenedor };