import React from 'react';
import { JsxElement } from 'typescript';
import styled from 'styled-components';
import './Styles.css';

interface IPaddleProps {
  xPosition: number; //px
  paddleWidth: number; //%
}

const Paddle = (props: IPaddleProps) => {

  return (
    <div className="Paddle" 
      style={{
        left:`${props.xPosition}px`,
        width:`${props.paddleWidth}%`
      }}
    >
    </div>
  );
}

export default Paddle;
