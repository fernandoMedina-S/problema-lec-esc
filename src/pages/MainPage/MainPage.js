import React, { useState } from "react";
import DataBaseSource from "../../components/DataBaseSource/DataBaseSource";
import LectorForm from "../../components/LectorForm/LectorForm";
import EscritorForm from "../../components/EscritorForm/EscritorForm";

const MainPage = () => {

  const [activeProcess, setActiveProcess] = useState("espera");

  return (
    <>
      <div className="main-page__main-container">
        <LectorForm labelLoading={activeProcess} changeActive={setActiveProcess}/>
        <DataBaseSource labelLoading={activeProcess} />
        <EscritorForm labelLoading={activeProcess} changeActive={setActiveProcess}/>
      </div>
    </>
  );
};

export default MainPage;
