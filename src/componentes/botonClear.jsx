import React from "react";
import "../estilos/Boton.css";

const BotonClear = (props) => {
  return(
    <div className="boton-clear" 
          onClick={props.manejarClear}>
      AC
    </div>
  );
}

export default BotonClear;