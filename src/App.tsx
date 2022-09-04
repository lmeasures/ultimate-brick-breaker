import React from 'react';
import './App.css';
import { ModeString } from './models/mode';
import Menu from './modePages/menu/Menu';
import Game from './modePages/game/Game';



const App = () => {

  const [mode, setMode] = React.useState<ModeString>('game');

  return (
    <div className="Ultimate-Brick-Breaker">
      {mode === 'menu' && <Menu mode={mode} setMode={setMode}/>}
      {mode === 'game' && <Game mode={mode} setMode={setMode}/>}
      {/* {mode === 'credits' && <Credits mode={mode} setMode={setMode}/>} */}
      {/* {mode === 'settings' && <Settings mode={mode} setMode={setMode}/>}  */} {/* MAKE OPTIONS AND SETTINGS BE POPOVERS, NOT NEW SCREENS. Modals and such. eugh. */}
    </div>
  )
}

export default App;
