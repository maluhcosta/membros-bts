import React from "react";
import "./style/Message.css";

export const Message = (props) => {
    return (
        <div>
            <h1 className="titulo">{props.titulo}</h1>
            <p className="nomes">{props.nomes}</p>
            {props.children}
        </div>
    );
};