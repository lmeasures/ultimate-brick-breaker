import React from 'react';
import './App.css';


const Menu = (props) => {
  return (
    <div className="Menu">
        <h1>Main Menu!</h1>
        <button onClick={props.setMode('game')}>Play Game!</button>
        <button onClick={props.setMode('credits')}>Credits</button>
        <button onClick={props.setMode('settings')}>Settings</button>
    </div>
  );
}

export default Menu;
