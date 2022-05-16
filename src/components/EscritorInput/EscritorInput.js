import React, { useState } from "react";
import Button from "@mui/material/Button";

const EscritorInput = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = (changeActive) => {
    if (!props.isWriting) {
      props.setIsWriting(true);
      changeActive("escritor");
      setActive((active) => !active);
      setTimeout(() => {
        changeActive("espera");
        setActive((active) => !active);
        props.setIsWriting(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="escritor-input__main-container">
        <p>Proceso escritor</p>
        <Button
          variant="contained"
          size="small"
          color="success"
          className="escritor-input__button"
          onClick={() => handleClick(props.changeActive)}
        >
          {!active ? "Iniciar" : "Detener"}
        </Button>
      </div>
    </>
  );
};

export default EscritorInput;
