import React from 'react';
import Paddle from '../paddle/Paddle';
import './Styles.css';


const GamePlay = () => {

  const [paddleXPosition, setPaddleXPosition] = React.useState<number>(window.innerWidth/2);
  const [mouseEnabled, setMouseEnabled] = React.useState<boolean>(true);

  const paddleWidthPercentage = 5;

  const handleMouseMove = (e: MouseEvent) => {
    if(!!mouseEnabled){
      setPaddleXPosition(( e.pageX - ( ( ( window.innerWidth / 100 ) * paddleWidthPercentage ) / 2 ) ) );
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
  },[]);

  const flipMouseEnabled = () =>{
    setMouseEnabled(!!mouseEnabled ? false : true);
  }

  return (
    <div className="GameplayContainer" onClick={() => setMouseEnabled(!mouseEnabled)}>
      <Paddle xPosition={paddleXPosition} paddleWidth={paddleWidthPercentage}/>
    </div>
  );
}

export default GamePlay;
