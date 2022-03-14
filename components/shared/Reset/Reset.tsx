import React, { useCallback } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useGameState } from '../../../hooks/useGameState'
import { styles } from './Reset.styles'

export function Reset() {

    const { handlePressReset } = useGameState()

    const handlePress = useCallback((e) => {
        handlePressReset()
    }, [])

    return (
        <TouchableOpacity onPress={handlePress} style={styles.body}>
            <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
    )
}
