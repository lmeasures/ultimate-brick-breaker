import React from "react";



export type ModeString = 'menu' | 'game' | 'credits' | 'settings';

export type ModeSet = {
    mode: ModeString,
    setMode: React.Dispatch<React.SetStateAction<ModeString>>
}