import React from 'react'
import './globo.css'

const Globo = ({ color }) => {
    return (
        <div className={`balloon ${color}`}>
            <div className="balloon-shine"></div>
            <div className="balloon-knot"></div>
            <div className="balloon-string"></div>
        </div>
    );
}

export { Globo };