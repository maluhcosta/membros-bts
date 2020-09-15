import React from 'react';
import './style/Message.css';

export const Message = (props) => {
    return (
        <div>
            <h1 className='titulo'>{props.titulo}</h1>
            <h1 className='nomes'>{props.nomes}</h1>
            {props.children}
        </div>
    );
};