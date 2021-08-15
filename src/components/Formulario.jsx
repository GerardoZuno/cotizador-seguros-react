import React, {useState} from "react";
import styled from '@emotion/styled'

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #1e1e1e;
  -webkit-appearance: none;
`

const InputRadio= styled.input`
  margin: 0 1rem;
`
const Boton = styled.button`
 background-color: #00838F;
 font-size: 1rem;
 width: 100%;
 padding: 1rem;
 color: #FFF;
 text-transform: uppercase;
 font-weight: bold;
 border: none;
 transition: background-color .3s ease;
 margin-top: 2rem;
  
 &:hover{
     background-color: #26C6DA;
     margin-top: 2rem;
     cursor: pointer;
     
 }

`
const Error = styled.div`
  background-color: red;
  color: #FFF;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`


function Formulario() {

  const [data, setData] = useState({
      marca: '',
      year: '',
      plan: 'completo'
  })

  const {marca, year, plan} = data

  const obtenerDatos = (e) => {
         setData({
             ...data,
             [e.target.name] : e.target.value
         })
  }

  const [error, setError] = useState(false)

  const cotizarSubmit = (e) => {
      e.preventDefault()
      if(!marca.trim() || !year.trim() || !plan.trim()) {
         setError(true)
         console.log('fracaso')

         return
      }
      setError(false)
      console.log('exito')

  }

  return (
    <form onSubmit={cotizarSubmit}>
        {
            error && (
                <Error>
                    Todos los campos son Obligatorios
                </Error>
            )
        }
      <Campo>
        <Label>MARCA</Label>
        <Select 
        name="marca"
        value={marca}
        onChange={obtenerDatos}
        >
          <option value="">--Seleccione</option>
          <option value="americano">--Americano</option>
          <option value="europeo">--Europeo</option>
          <option value="asiatico">--Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select
        name="year"
        value={year}
        onChange={obtenerDatos}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
          <Label htmlFor="">Plan</Label>
          <InputRadio
           type="radio"
            name="plan"
            value="basico"
            checked={plan === "basico"}
            onChange={obtenerDatos}
            />
            Basico

           <InputRadio
           type="radio"
            name="plan"
            value="completo"
            checked={plan === "completo"}
            onChange={obtenerDatos}

            />
            Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
}

export default Formulario;
