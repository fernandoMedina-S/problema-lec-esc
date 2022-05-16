import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Loading = (props) =>{
    
    const actor = {
        message: {
            lector: "leyendo...",
            escritor: "escribiendo...",
            espera: "esperando..."
        },
        color: {
            lector: "secondary",
            escritor: "success",
            espera: ""
        }
    }

    return (
        <>
            <div className="loading__main-container">
                {props.labelLoading !== "espera" && <CircularProgress color={actor.color[props.labelLoading]}/>}
                <p className="loading__text">{actor.message[props.labelLoading]}</p>
            </div>
        </>
    )
}

export default Loading;