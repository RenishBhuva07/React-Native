import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, } from 'react-native';
import OtpBox from './Components/OtpBox';
import login from './English';
import styles from './StyleSheet';

export interface SendUIProps {
    isFocus: boolean;
    contactNumber: string;
    onChangeContactNumber: (mobile: string) => void,
    onGetFocus: () => void,
    onGetBlur: () => void,
    Error: string,
    // onOtpChange: () => void;
    pin: string[];
    onGetOtp: () => void,
    onChangeOtp: (text: string, index: number) => void;

    // onOtpFocus: (index: number) => void;
    // onOtpBlur: (index) => void;

    onPressLogin: () => void;


    // otp: string[];
    // activeIndex: any;
    // isFocused: boolean;

}

class LoginUI extends Component<SendUIProps> {

    constructor(props: SendUIProps) {
        super(props);
    }

    render() {

        const isFocused = this.props.isFocus;
        const Error_Color = isFocused ? styles.focusedInput : styles.bluredInput;
        // console.warn(this.props.pin);
        // const Pin = this.props.pin;
        const {
            onChangeOtp,
            // onOtpFocus
        } = this.props;

        return (
            <View>
                {/* Heading */}
                <View style={styles.heading_container}>
                    <Text style={styles.Heading}>{login.Title_Digi}<Text style={styles.Heading2}>{login.Title_pay}</Text></Text>
                </View>

                {/* Phone Number TextInput */}
                <Text style={styles.label}>{login.Contact_Number_label}</Text>

                <TextInput
                    placeholder={login.PhoneNumber_placeholder}
                    // placeholderTextColor={login.PhoneNumber_placeholder_color}
                    keyboardType='number-pad'
                    maxLength={10}
                    style={[styles.textInput, Error_Color]}
                    value={this.props.contactNumber}
                    onChangeText={(text: string) => { this.props.onChangeContactNumber(text); }}
                    onFocus={() => { this.props.onGetFocus; }}
                    onBlur={() => { this.props.onGetBlur; }}
                >
                </TextInput>
                {this.props.Error !== '' && <Text style={styles.error}>{this.props.Error}</Text>}

                {/* Get OTP Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.props.onGetOtp; }}>

                    <Text style={styles.buttonText}>
                        {login.Get_Otp_Button}
                    </Text>

                </TouchableOpacity>



                <OtpBox
                    pin={this.props.pin}
                    handleOTPChange={onChangeOtp}
                // handleOTPFocus={onOtpFocus}
                />

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => { this.props.onPressLogin }}
                >

                    <Text style={[styles.buttonText, styles.loginText]}>
                        {login.Login_Button}
                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginUI;