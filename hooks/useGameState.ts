import React, { useContext } from "react";
import { GameStateContext } from "../components/providers";

export const useGameState = () => {
    const { state, handlePressSquare, handlePressReset } = useContext(GameStateContext)

    return { state, handlePressSquare, handlePressReset }
}