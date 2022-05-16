import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const LectorInput = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = (changeActive) => {
    if (!props.isWriting) {
      setActive((active) => !active);
      changeActive("lector");
      props.changeIsActive((isActive)=>!isActive);
    }
  };

  useEffect(() => {
    setActive((active) => (props.isWriting && active ? false : active));
    if(props.isWriting){
      props.changeIsActive(false);
    }
  }, [props.isWriting]);

  return (
    <>
      <div className="lector-input__main-container">
        <p>Proceso lector</p>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          className="lector-input__button"
          onClick={() => {
            handleClick(props.changeActive);
          }}
        >
          {active ? "Detener" : "Iniciar"}
        </Button>
      </div>
    </>
  );
};

export default LectorInput;
