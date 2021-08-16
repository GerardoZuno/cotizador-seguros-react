import React from 'react'
import styled from '@emotion/styled'
import { primeraMayuscula } from "../helper.js";
import PropTypes from "prop-types";



const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`


function Resumen({data}) {

    const {marca, plan, year} = data

    if(marca === ""){
        return null
    }
         
    return (
        <ContenedorResumen>
        <h2>
          Resumen de Cotizacion  
        </h2>
        <ul>
            <li>
               Marca: {primeraMayuscula(marca)}
            </li>
            <li>
               Plan: {primeraMayuscula(plan)}
            </li>
            <li>
               Año: {primeraMayuscula(year)}
            </li>
        </ul>
        </ContenedorResumen>
    )
}
Resumen.propTypes = {
  data: PropTypes.object.isRequired
}

export default Resumen
