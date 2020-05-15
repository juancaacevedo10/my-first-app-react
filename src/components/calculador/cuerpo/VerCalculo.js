import React from 'react'
import '../../../style.css';
var vercalculo =(p)=>{
    let {altura,peso} = p;
    const imc = peso/altura
    return(
        <article>
            <span>IMC</span>
            <span>{imc.toFixed(2)}</span>
        </article>
    )
}

export default vercalculo;