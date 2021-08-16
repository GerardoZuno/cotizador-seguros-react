import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  color: #fff;
  margin-top: 2rem;
  font-size: 19px;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: RGB(127, 124, 237);
  margin-top: 1rem;
  position: relative;
`;

function Resultado({ cotizacion }) {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y numero de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Mensaje>
            <strong>El total es : $ <span>{cotizacion}</span></strong>
          </Mensaje>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;
