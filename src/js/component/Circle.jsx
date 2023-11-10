import React from "react";
import '../../styles/Circle.css'



function Circle(props){
    return(
        <button id={props.identifier} className={props.color} onClick={props.action}>
          
        </button>
    );
};

export default Circle;