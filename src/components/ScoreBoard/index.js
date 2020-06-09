import React from "react";
import "./ScoreBoard.css";
import { FaCaretRight as Arrow} from "react-icons/fa";

//stateless component
const ScoreBoard = props => (
  <div className="score-box">
    <h3 className="score-text">Your Score <Arrow className="arrow-icon" style={{verticalAlign:"middle"}}/> {props.total}</h3>
    <h3 className="status-text">{props.status}</h3>
  </div>
);

export default ScoreBoard;