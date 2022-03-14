import { StyleSheet, Dimensions } from "react-native";

const { height: gameHeight } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    // height
    header: {
        height: gameHeight * .1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
    },
})