import React, { useState, useEffect } from "react";
import LectorInput from "../LectorInput/LectorInput";

const LectorForm = (props) => {
  const [isWriting, setIsWriting] = useState(false);
  const [process1, setProcess1] = useState(false);
  const [process2, setProcess2] = useState(false);
  const [process3, setProcess3] = useState(false);

  useEffect(() => {
    setIsWriting((isWriting) =>
      props.labelLoading === "escritor" ? true : props.labelLoading === "espera" ? false : isWriting
    );
    if (
      !process1 &&
      !process2 &&
      !process3 &&
      props.labelLoading !== "escritor"
    ) {
      props.changeActive("espera");
    }
  }, [props.labelLoading, process1, process2, process3]);

  return (
    <>
      <form className="lector-form__main-container">
        <LectorInput
          isActive={process1}
          changeIsActive={setProcess1}
          isWriting={isWriting}
          changeActive={props.changeActive}
        />
        <LectorInput
          isActive={process2}
          changeIsActive={setProcess2}
          isWriting={isWriting}
          changeActive={props.changeActive}
        />
        <LectorInput
          isActive={process3}
          changeIsActive={setProcess3}
          isWriting={isWriting}
          changeActive={props.changeActive}
        />
      </form>
    </>
  );
};

export default LectorForm;
