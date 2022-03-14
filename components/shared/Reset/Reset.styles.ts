import { StyleSheet, Dimensions } from "react-native";

const { width: buttonWidth } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    // button container
    body: {
        width: buttonWidth * .4,
        backgroundColor: '#f45',
        padding: 10,
        marginBottom: 100,
    },
    // text body
    text: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    }
})