import { useState } from 'react'
import { PantallaInicio } from './Inicio'
import { PantallaJuego } from './PantallaJuego'
import { PantallaFinal } from './PantallaFinal'
import { useContext } from 'react'
import { JuegoContexto } from './JuegoContext'

function App() {
  const {
    pantalla
  } = useContext(JuegoContexto)
  return (
    <>
      {(pantalla == 'Inicio') && <PantallaInicio />}
      {(pantalla == 'Juego') && <PantallaJuego />}
      {(pantalla == 'Final') && <PantallaFinal />}
    </>
  )
}

export default App
