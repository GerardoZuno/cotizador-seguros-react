import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    data: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const { cotizacion, data } = resumen;
  const [loading, setLoading] = useState(false);

  return (
    <Contenedor>
      <Header title="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setLoading={setLoading} />
        {loading && <Spinner />}

        {!loading && <Resumen data={data} />}
        {!loading ? <Resultado cotizacion={cotizacion}  /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
