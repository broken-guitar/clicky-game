import React from "react";
import "./Wrapper.css";

//stateless component
const Container = props => <div className="wrapper">{props.children}</div>;

export default Container;