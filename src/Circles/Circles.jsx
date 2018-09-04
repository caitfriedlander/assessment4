import React from 'react';
import './Circles.css';

const Circles = (props) => (
    <div className="Circles">
       <div id={1} className={props.selected === "1" ? 'selected' : ''}>1</div>
       <div id={2} className={props.selected === "2" ? 'selected' : ''}>2</div>
       <div id={3} className={props.selected === "3" ? 'selected' : ''}>3</div>
       <div id={4} className={props.selected === "4" ? 'selected' : ''}>4</div>
    </div>
)

export default Circles;