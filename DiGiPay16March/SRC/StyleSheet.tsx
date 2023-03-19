import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heading_container: {
        backgroundColor: 'red',
        height: 240,
        width: '100%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    Heading: {
        fontWeight: '600',
        marginTop: 170,
        fontSize: 45,
        textAlign: 'center',
    },
    Heading2: {
        fontSize: 25
    },
    label: {
        color: 'red',
        marginTop: 30,
        fontSize: 25,
        textAlign: 'center',
    },
    textInput: {
        textAlign: 'center',
        borderWidth: 2,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 5,
        fontSize: 20,
    },
    focusedInput: {
        borderColor: 'red',
    },
    bluredInput: {
        borderColor: 'black',
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: 200,
        marginVertical: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    otpBox: {
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 5,
        borderRadius: 5,
        width: 50,
        fontSize: 20,
    },
    loginButton: {
        backgroundColor: 'red',
        width: '100%',
        height: 150,
        marginTop: 70,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    loginText: {
        marginTop: 60,
        fontSize: 30,
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center'
    },
});

export default styles;