export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function obtenerMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;

    case "americano":
      incremento = 1.15;
      break;

    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

export function calcularSeguro(plan) {
    let seguro;

    if(plan === 'basico'){
        seguro = 1.10
    }
     else if(plan === 'completo'){
        seguro = 1.20
    }

    return seguro;
  }


export function primeraMayuscula(texto){

    return texto.charAt(0).toUpperCase() + texto.slice(1)

}  