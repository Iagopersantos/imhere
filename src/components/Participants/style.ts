import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        backgroundColor: '#1F1E25',
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10,
    },

    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 12,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },

    button: {
        width: 52,
        height: 52,
        backgroundColor: '#e23c44',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

})