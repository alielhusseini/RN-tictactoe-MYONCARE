import { Dimensions, StyleSheet } from "react-native";

const { width: gameWidth, height: gameHeight } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    // body
    body: {
        flex: 1,
        justifyContent: 'center',
        width: gameWidth * .8,
        height: gameHeight * .4,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    // row
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: gameHeight * .4 / 3
    }
})