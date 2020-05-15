import React from 'react';
import CabeceraCalculo from './CabeceraCalculo';
import CuerpoCalculo from './cuerpo/CuerpoCalculo'

let Calculador = () =>    
    <section>
        <CabeceraCalculo titulo="calculadora"></CabeceraCalculo>
        <CuerpoCalculo></CuerpoCalculo>
    </section>


export default Calculador;