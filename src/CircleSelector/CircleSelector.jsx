import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
    <div className="CircleSelector">
        <button id={1} className={props.selected === "1" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>Select Circle 1</button>
        <button id={2} className={props.selected === "2" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>Select Circle 2</button>
        <button id={3} className={props.selected === "3" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>Select Circle 3</button>
        <button id={4} className={props.selected === "4" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>Select Circle 4</button>
    </div>
)

export default CircleSelector;