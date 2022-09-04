import React from 'react';
import './Styles.css';
import { ModeSet, ModeString } from '../../models/mode';

const Menu = ({mode, setMode}: ModeSet) => {
  return (
    <div className="MenuContainer">
        <h1>Main Menu!</h1>
        <button onClick={() => setMode('game')}>Play Game!</button>
        <button onClick={() => setMode('credits')}>Credits</button>
        <button onClick={() => setMode('settings')}>Settings</button>
    </div>
  );
}

export default Menu;
