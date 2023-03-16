import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heading_container: {
        // display: 'flex',
        backgroundColor: 'red',
        height: 275,
        width: '100%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    Heading: {
        fontWeight: '600',
        marginTop: 200,
        // color: 'white',
        fontSize: 45,
        textAlign: 'center',
    },
    Heading2: {
        fontSize: 25
    },
    label: {
        color: 'red',
        marginTop: 50,
        fontSize: 25,
        textAlign: 'center',
    },
    textInput: {
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderBottomColor: 'black',
        borderTopColor: 'black',
        // backgroundColor:'green',
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 5,
        fontSize: 20,
        // color: 'white'
    },
    focusedInput: {
        borderColor: 'red',
    },
    bluredInput: {
        borderColor: 'white',
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
        // color: 'white',
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
        // padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        width: 50,
        fontSize: 20,
    },
    activeBox: {
        // color: 'white',
        borderColor: 'red',
    },
    loginButton: {
        backgroundColor: 'red',
        width: '100%',
        height: 150,
        marginTop: 95,
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
    },
});

export default styles;