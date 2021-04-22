import React from 'react';
import './button.css'

const Button =(props)=> {


const {modal}=props;


    return (
        <button className="button" onClick={modal}>ADD NEW NOTE</button>
    )

};

export default Button