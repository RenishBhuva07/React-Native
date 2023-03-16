import React, {Component, createRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

interface State {
    phoneNumber: string;
    otp: string[];
    activeIndex: number;
}

class OTPScreen extends Component<{}, State> {
    private phoneInput = createRef<TextInput>();
    private otpInputs: TextInput[] = [];

    state: State = {
        phoneNumber: '',
        otp: ['', '', '', ''],
        activeIndex: 0,
    };

    handlePhoneChange = (phoneNumber: string) => {
        this.setState({phoneNumber});
        if (this.phoneInput.current) {
            this.phoneInput.current.focus();
        }
    };

    handleOTPChange = (text: string, index: number) => {
        const {otp} = this.state;
        otp[index] = text;
        this.setState({otp});
        if (text.length === 1 && index < 3 && this.otpInputs[index + 1]) {
            this.otpInputs[index + 1].focus();
        }
    };

    handleGetOTP = () => {
        if (this.otpInputs[0]) {
            this.otpInputs[0].focus();
        }
    };

    handleOTPBoxFocus = (index: number) => {
        this.setState({activeIndex: index});
    };

    handleOTPBoxBlur = () => {
        this.setState({activeIndex: -1});
    };

    render() {
        const {phoneNumber, otp, activeIndex} = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.textInput, phoneNumber ? styles.validInput : styles.invalidInput]}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={this.handlePhoneChange}
                    ref={this.phoneInput}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleGetOTP}
                >
                    <Text style={styles.buttonText}>Get OTP</Text>
                </TouchableOpacity>
                <View style={styles.otpContainer}>
                    {otp.map((value, index) => (
                        <TextInput
                            key={index}
                            style={[styles.otpBox, activeIndex === index && styles.activeBox]}
                            value={value}
                            onChangeText={(text) => this.handleOTPChange(text, index)}
                            maxLength={1}
                            keyboardType="number-pad"
                            ref={(input) => {this.otpInputs[index] = input!;}}
                            onFocus={() => this.handleOTPBoxFocus(index)}
                            onBlur={this.handleOTPBoxBlur}
                        />
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    validInput: {
        borderColor: 'green',
    },
    invalidInput: {
        borderColor: 'gray',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    otpContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    otpBox: {
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 5,
        width: 50,
    },
    activeBox: {
        borderColor: 'green',
    },
});

export default OTPScreen;
