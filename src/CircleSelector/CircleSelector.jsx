import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
    <div className="CircleSelector">
        <button id={1} className={props.selected === "1" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>{props.selected === "1" ? 'Selected Circle 1' : 'Select Circle 1'}</button>
        <button id={2} className={props.selected === "2" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>{props.selected === "2" ? 'Selected Circle 2' : 'Select Circle 2'}</button>
        <button id={3} className={props.selected === "3" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>{props.selected === "3" ? 'Selected Circle 3' : 'Select Circle 3'}</button>
        <button id={4} className={props.selected === "4" ? 'selected' : ''} onClick={(e) => props.handleButtonClick(e)}>{props.selected === "4" ? 'Selected Circle 4' : 'Select Circle 4'}</button>
    </div>
)

export default CircleSelector;