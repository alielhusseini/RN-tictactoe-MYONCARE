export interface IGameState {
    squareOne: string,
    squareTwo: string,
    squareThree: string,
    squareFour: string,
    squareFive: string,
    squareSix: string,
    squareSeven: string,
    squareEight: string,
    squareNine: string,
    playerIsX: boolean,
    gameMessage: string,
}

type ActionPayloadType = {
    name: string,
    value: boolean | string
}
interface IAction {
    type: string,
    payload?: ActionPayloadType
}

export type ReducerType = (state: IGameState, action: IAction) => IGameState

export interface IContext {
    state: IGameState,
    handlePressSquare({ name, value }: {
        name: string, value: string
    }): void,
    handlePressReset(): void
}
