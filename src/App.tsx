import React from 'react';
import './App.css';
import Menu from './ModePages/Menu';

type ModeString = 'menu' | 'game' | 'credits' | 'settings';

const [mode, setMode] = React.useState<ModeString>('menu');

const App = () => {
  return (
    <div className="Ultimate Brick Breaker">
      {mode === 'menu' && <Menu modeset={{mode, setMode}}/>}
      {/* {mode === 'game' && <Game modeset={{mode, setMode}}/>} */}
      {/* {mode === 'credits' && <Credits modeset={{mode, setMode}}/>} */}
      {/* {mode === 'settings' && <Settings modeset={{mode, setMode}}/>} */}
    </div>
  )
}

export default App;
