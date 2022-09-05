import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        backgroundColor: '#000000',
        padding: 24,
        flex: 1
    },

    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },

    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },

    input: {
        flex: 1,
        height: 52,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 7
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },

    button: {
        width: 52,
        height: 52,
        backgroundColor: '#008000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 22,
        marginBottom: 24,
    },

    emptyParticipants: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }

});