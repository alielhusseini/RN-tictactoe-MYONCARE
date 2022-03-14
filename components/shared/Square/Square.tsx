import React, { ReactElement, useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useGameState } from '../../../hooks/useGameState'
import { ISquare } from './Square.types'
import { styles } from './Square.styles'

export function Square({ stateName }: ISquare): ReactElement {

    const { state, handlePressSquare } = useGameState()

    const handlePress = useCallback((e) => {
        handlePressSquare({ name: stateName, value: state.playerIsX ? "X" : "O" })
    }, [handlePressSquare])

    return (
        <TouchableOpacity disabled={(state[stateName] === "" ? false : true) || (state.gameMessage !== '' && true)} style={styles.body} onPress={handlePress}>
            <Text>{state[stateName]}</Text>
        </TouchableOpacity>
    )
}