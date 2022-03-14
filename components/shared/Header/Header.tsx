import React from 'react'
import { Text, View } from 'react-native'
import { useGameState } from '../../../hooks/useGameState'
import { styles } from './Header.styles'

export function Header() {

    const { state } = useGameState()

    return (
        <View style={styles.header}>
            {!state.gameMessage ?
                <Text style={styles.headerTitle}>Players Turn: {state.playerIsX ? "X" : "O"}</Text> :
                <Text style={styles.headerTitle}>{state.gameMessage}</Text>
            }
        </View>
    )
}