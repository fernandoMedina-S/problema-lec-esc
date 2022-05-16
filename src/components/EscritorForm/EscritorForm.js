import React, { useState } from "react";
import EscritorInput from "../EscritorInput/EscritorInput";

const EscritorForm = (props) => {
  const [isWriting, setIsWriting] = useState(false);

  return (
    <>
      <form className="escritor-form__main-container">
        <EscritorInput
          isWriting={isWriting}
          setIsWriting={setIsWriting}
          labelLoading={props.labelLoading}
          changeActive={props.changeActive}
        />
        <EscritorInput
          isWriting={isWriting}
          setIsWriting={setIsWriting}
          labelLoading={props.labelLoading}
          changeActive={props.changeActive}
        />
        <EscritorInput
          isWriting={isWriting}
          setIsWriting={setIsWriting}
          labelLoading={props.labelLoading}
          changeActive={props.changeActive}
        />
      </form>
    </>
  );
};

export default EscritorForm;
