import React from 'react'
import { View } from 'react-native'
import { Square } from '../Square/Square'
import { styles } from './SquareContainer.styles'

export function SquareContainer() {
    return (
        <View style={styles.body}>
            <View style={styles.row}>
                <Square stateName='squareOne' />
                <Square stateName='squareTwo' />
                <Square stateName='squareThree' />
            </View>
            <View style={styles.row}>
                <Square stateName='squareFour' />
                <Square stateName='squareFive' />
                <Square stateName='squareSix' />
            </View>
            <View style={styles.row}>
                <Square stateName='squareSeven' />
                <Square stateName='squareEight' />
                <Square stateName='squareNine' />
            </View>
        </View>
    )
}