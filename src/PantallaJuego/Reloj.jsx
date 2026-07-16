import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { JuegoContexto } from '../JuegoContext';

const Reloj = () => {
    const {
        setPantalla,
    } = useContext(JuegoContexto)

    const [tiempo, setTiempo] = useState(30)
    useEffect(() => {
        let numero = 30
        const intervalo = setInterval(() => {
            numero -= 1;
            setTiempo(numero)
            if (numero == -1) {
                setPantalla('Final')
            }
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };

    }, []);

    return (
        <div className="info-card">
            <span>⏱</span>
            <p>{tiempo}</p>
        </div>
    );
}

export { Reloj };