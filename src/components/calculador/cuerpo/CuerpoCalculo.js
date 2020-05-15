import React from 'react'
import BasculaIMC from './BasculaIMC'
import FormularioCalculo from './FormularioCalculo'
import VerCalculo from './VerCalculo'

function cuerpo(){
    return(
        <section>
            <FormularioCalculo></FormularioCalculo>
            <VerCalculo altura = {160} peso ={80}></VerCalculo>
            <BasculaIMC></BasculaIMC>

        </section>
    );
}

export default cuerpo;