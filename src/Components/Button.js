import React from 'react';
import './style/Button.css';

export const Button = (props) => {
    return <button className='btn-choice' onClick={props.mudaValor}>{props.membros}</button>;
};