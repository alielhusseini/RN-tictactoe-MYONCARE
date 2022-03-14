import React, { useEffect } from 'react'
import { createContext, PropsWithChildren, ReactElement, useReducer } from 'react'
import { IContext, IGameState, ReducerType } from './GameStateProvider.types'

const INITIAL_STATE: IGameState = {
    squareOne: "",
    squareTwo: "",
    squareThree: "",
    squareFour: "",
    squareFive: "",
    squareSix: "",
    squareSeven: "",
    squareEight: "",
    squareNine: "",
    playerIsX: true,
    gameMessage: '',
}

const reducer: ReducerType = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case "changeSquare": {
            if (payload !== undefined) {
                const { name, value } = payload;
                return { ...state, [name]: value, playerIsX: !state.playerIsX }
            }
        }
        case "resetGame": {
            return INITIAL_STATE
        }
        case "winGame": {
            return { ...state, gameMessage: `Congrats player ${state.playerIsX ? 'O' : 'X'} won!` }
        }
        case "drawGame": {
            return { ...state, gameMessage: `Draw :( \n\nPress Reset & Play Again!` }
        }
        default:
            return state
    }

}

export const GameStateContext = createContext<IContext>({ state: INITIAL_STATE, handlePressSquare: ({ name, value },) => null, handlePressReset: () => null })

export const GameStateProvider = ({ children }: PropsWithChildren<{}>): ReactElement => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        checkForResult()
    }, [state.playerIsX])

    const checkForResult = () => {
        // check row 1
        if (state.squareOne === state.squareTwo && state.squareTwo === state.squareThree && state.squareOne !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check row 2
        if (state.squareFour === state.squareFive && state.squareFive === state.squareSix && state.squareFour !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check row 3
        if (state.squareSeven === state.squareEight && state.squareEight === state.squareNine && state.squareSeven !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check column 1
        if (state.squareOne === state.squareFour && state.squareFour === state.squareSeven && state.squareOne !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check column 2
        if (state.squareTwo === state.squareFive && state.squareFive === state.squareEight && state.squareTwo !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check column 3
        if (state.squareThree === state.squareSix && state.squareSix === state.squareNine && state.squareThree !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check back slach diagonal
        if (state.squareOne === state.squareFive && state.squareFive === state.squareNine && state.squareOne !== '') {
            return dispatch({ type: 'winGame' })
        }
        // check forward slach diagonal
        if (state.squareThree === state.squareFive && state.squareFive === state.squareSeven && state.squareThree !== '') {
            return dispatch({ type: 'winGame' })
        }
        if (state.squareOne && state.squareTwo && state.squareThree && state.squareFour && state.squareFive && state.squareSix && state.squareSeven && state.squareEight && state.squareNine) {
            return dispatch({ type: 'drawGame' })
        }
    }

    const handlePressSquare = ({ name, value }: { name: string, value: "X" | "O" }) => {
        dispatch({ type: 'changeSquare', payload: { name, value } })
    }

    const handlePressReset = () => {
        dispatch({ type: 'resetGame' })
    }

    return <GameStateContext.Provider value={{ state, handlePressSquare, handlePressReset }}>{children}</GameStateContext.Provider>
}