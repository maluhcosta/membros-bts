import React from 'react';
import './style/Button.css';

const Button = (props) => {
    return <button className='btn-choice' onClick={props.mudaValor}>{props.membros}</button>;
};

export default Button;