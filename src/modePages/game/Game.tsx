import React from 'react';
import './Styles.css';
import { ModeSet, ModeString } from '../../models/mode';
import Gameplay from '../../gameComponents/gameplayWindow/Gameplay';

const Game = ({mode, setMode}: ModeSet) => {
  return (
    <div className="GameContainer">
      <Gameplay/>
    </div>
  );
}

export default Game;
