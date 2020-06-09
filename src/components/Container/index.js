import React from "react";
import "./Container.css";

//stateless component
const Container = props => (
    <div className="wrapper">
        <div className="card-container">
            {props.children}
        </div>   
    </div>
);
export default Container;